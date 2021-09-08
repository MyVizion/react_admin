import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

const ProjectsList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='project_id' />
                <TextField source='category_id' />
                <TextField source='title' />
                <TextField source='UUID' />
                <DateField source='created_at' />
                <DateField source='updated_at' />
                <EditButton basePath='/projects' />
                <DeleteButton basePath='/projects' />
            </Datagrid>
        </List>
    )
}

export default ProjectsList
