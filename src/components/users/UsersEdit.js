import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin'

const UsersEdit = (props) => {
    return (
        <Edit title="Edit a user" {...props}>
            <SimpleForm>
                <TextInput source='id' />
                <TextInput source='username' />
                <TextInput source='email' />
                <TextInput source='firstname' />
                <TextInput source='lastname' />
                <NumberInput source='age' />
            </SimpleForm>
        </Edit>
    )
}

export default UsersEdit
