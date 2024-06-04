import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import UserIcon from '@material-ui/icons/Group';
import authProvider from './authProvider';

import { UserList, UserEdit, UserCreate } from './users';

const dataProvider = simpleRestProvider('http://localhost:5000/api');

const AdminDashboard = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
  </Admin>
);

export default AdminDashboard;
