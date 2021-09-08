import React from "react";
import { Admin, Resource} from "react-admin"
import restProvider from "ra-data-simple-rest"

import projectsList from "./components/ProjectsList"
import usersList from "./components/UsersList"

function App() {
  return (
    <Admin dataProvider={restProvider('https://api.myvizion.net')}>
      <Resource name='projects' list={projectsList} />
      <Resource name='users' list={usersList} />
    </Admin>
  );
}

export default App;
