import React from 'react'
import { List, Datagrid, TextField, NumberField, DateField, EditButton, DeleteButton } from 'react-admin'


const UsersList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='uuid' />
                <TextField source='username' />
                <NumberField source='age' />
                <TextField source='school' />
                <TextField source='study_program' />
                <DateField source='created_at' />
                <DateField source='updated_at' />
                <EditButton basePath='/users' />
                <DeleteButton basePath='/users' />
            </Datagrid>
        </List>
    )
}

export default UsersList
