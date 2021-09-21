import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin'

const categoriesCreate = (props) => {
    return (
        <Create title='Create a category' {...props}>
            <SimpleForm>
                <TextInput source='category' />
            </SimpleForm>
        </Create>
    )
}

export default categoriesCreate
