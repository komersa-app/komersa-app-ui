import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import GroupIcon from '@mui/icons-material/Group';
import authProvider from './authProvider';
import { UserList } from './user/UserList';
import { UserCreate } from './user/UserCreate';
import UserEdit from './user/UserEdit';


const dataProvider = simpleRestProvider('http://localhost:5000/api');

const AdminDashboard = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={GroupIcon} />
  </Admin>
);

export default AdminDashboard;
