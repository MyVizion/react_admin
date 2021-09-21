import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const categoriesEdit = (props) => {
    return (
        <SimpleForm title='Edit a category' {...props}>
            <Edit>
                <TextInput disabled source='id'/>
                <TextInput source='category'/>
            </Edit>
        </SimpleForm>
    )
}

export default categoriesEdit
