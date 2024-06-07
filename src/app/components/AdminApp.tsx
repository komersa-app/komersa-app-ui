'use client';
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import simpleRestProvider from 'ra-data-simple-rest';
import { UserCreate } from "./user/UserCreate";
import UserEdit from "./user/UserEdit";
import { UserList } from "./user/UserList";

const dataProvider = simpleRestProvider("http://http://localhost:8080");

const AdminApp: React.FC = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="User" list={UserList} edit={UserEdit} create={UserCreate} />
  </Admin>
);

export default AdminApp;
