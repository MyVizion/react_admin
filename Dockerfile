FROM node:14-alpine AS node


# Builder stage

FROM node AS builder

# Use /app as the CWD
WORKDIR /app            

# Copy package.json and package-lock.json to /app
COPY package*.json ./   

# Install all dependencies
RUN npm i               

# Copy the rest of the code
COPY . .                


# Final stage

FROM node AS final

# Prepare destination directory and ensure user node owns it
RUN mkdir -p /home/node/ && chown -R node:node /home/node/

# Set CWD
WORKDIR /home/node/

# Copy package.json and package-lock.json
COPY package*.json ./

# Switch to user node
USER node

# Install libraries as user node
RUN npm i --only=production

# Copy js files and change ownership to user node
COPY --chown=node:node --from=builder /app .

# Open desired port
EXPOSE 3000

# Use js files to run the application
ENTRYPOINT ["node", "app.js"]  