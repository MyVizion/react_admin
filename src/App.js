import React from "react";
import { Admin, Resource} from "react-admin"
import RestProvider from 'ra-data-json-server';

import projectsList from "./components/projects/ProjectsList"
import usersList from "./components/users/UsersList"
import categoriesList from "./components/categories/categoriesList"

function App() {
  return (
    <Admin dataProvider={RestProvider('http://api.myvizion.net')}>
      <Resource name='projects' list={projectsList} />
      <Resource name='users' list={usersList} />
      <Resource name='categories' list={categoriesList} />
    </Admin>
  );
}

export default App;
