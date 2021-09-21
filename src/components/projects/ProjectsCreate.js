import React from 'react'
import { Create, SimpleForm, TextInput, DateTimeInput, FileInput, FileField, BooleanInput } from 'react-admin'

const ProjectsCreate = (props) => {
    return (
        <Create title="Create a project" {...props}>
            <SimpleForm>
                <TextInput source='title'/>
                <TextInput source='info'/>
                <TextInput source='likes'/>
                <TextInput source='views'/>
                <TextInput source='location'/>
                <DateTimeInput source='time'/>
                <TextInput source='needs'/>
                <FileInput source="files" label="Project image" accept="application/image">
                    <FileField source="src" title="title" />
                </FileInput>
                <BooleanInput label="Open?" source="open" />
            </SimpleForm>
        </Create>
    )
}

export default ProjectsCreate
