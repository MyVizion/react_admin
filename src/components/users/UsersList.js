import React from 'react'
import { List, Datagrid, TextField, NumberField, DateField, EditButton, DeleteButton } from 'react-admin'


const UsersList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='username' />
                <TextField source='email' />
                <TextField source='firstname' />
                <TextField source='lastname' />
                <NumberField source='age' />
                <DateField source='created_at' />
                <DateField source='updated_at' />
                <EditButton basePath='/users' />
                <DeleteButton basePath='/users' />
            </Datagrid>
        </List>
    )
}

export default UsersList
