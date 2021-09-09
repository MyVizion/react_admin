import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

const ProjectsList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='category' />
                <TextField source='title' />
                <DateField source='createdAt' />
                <DateField source='updatedAt' />
                <EditButton basePath='/projects' />
                <DeleteButton basePath='/projects' />
            </Datagrid>
        </List>
    )
}

export default ProjectsList
