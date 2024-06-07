import * as React from 'react';
import { Admin, Login, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { UserCreate } from './user/UserCreate';
import UserEdit from './user/UserEdit';
import { UserList } from './user/UserList';
import authProvider from '../admin/authProvider';

const dataProvider = simpleRestProvider("http://localhost:8080");

const AdminApp: React.FC = () => (
  <Admin loginPage={Login} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
  </Admin>
);

export default AdminApp;
