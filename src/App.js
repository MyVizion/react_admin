import React from "react";
import { Admin, Resource} from "react-admin"
import jsonServerProvider from 'ra-data-json-server';

import projectsList from "./components/projects/ProjectsList"
import projectsCreate from "./components/projects/ProjectsCreate"
import projectsEdit from "./components/projects/ProjectsEdit"

import usersList from "./components/users/UsersList"
import usersCreate from "./components/users/UsersCreate"
import usersEdit from "./components/users/UsersEdit"

import categoriesList from "./components/categories/CategoriesList"
import categoriesEdit from "./components/categories/CategoriesEdit"
import categoriesCreate from "./components/categories/CategoriesCreate"

const dataProvider = jsonServerProvider("https://api.myvizion.net")

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name='projects' list={projectsList} create={projectsCreate} edit={projectsEdit}/>
      <Resource name='users' list={usersList} create={usersCreate} edit={usersEdit}/>
      <Resource name='categories' list={categoriesList} create={categoriesCreate} edit={categoriesEdit}/>
    </Admin>
  );
}

export default App;
