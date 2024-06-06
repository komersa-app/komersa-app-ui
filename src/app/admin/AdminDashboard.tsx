import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import GroupIcon from '@mui/icons-material/Group';
import authProvider from './authProvider';
import { UserList } from '../components/user/UserList';
import { UserCreate } from '../components/user/UserCreate';
import UserEdit from '../components/user/UserEdit';


const dataProvider = simpleRestProvider('http://localhost:8080/login');

const AdminDashboard = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="User" list={UserList} edit={UserEdit} create={UserCreate} icon={GroupIcon} />
  </Admin>
);

export default AdminDashboard;
