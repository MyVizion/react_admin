import React from 'react'
import { Edit, SimpleForm, TextInput, DateTimeInput, BooleanInput } from 'react-admin'

const ProjectsEdit = (props) => {
    return (
        <Edit title="Edit a project" {...props}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='title'/>
                <TextInput multiline source='info'/>
                <TextInput source='likes'/>
                <TextInput source='views'/>
                <TextInput source='location'/>
                <DateTimeInput source='time'/>
                <TextInput source='pjp' label='Project Picture'/>
                <TextInput source='needs'/>
                <BooleanInput label="Open?" source="open" />
                <TextInput source='createdAt'/>
                <TextInput source='updatedAt'/>
            </SimpleForm>
        </Edit>
    )
}

export default ProjectsEdit
