import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'

const CategoriesList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='category' />
                <EditButton basePath='/categories' />
                <DeleteButton basePath='/categories' />
            </Datagrid>
        </List>
    )
}

export default CategoriesList
