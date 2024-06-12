import { Admin, Login, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { UserCreate } from './dashboard/user/UserCreate';
import { UserEdit }from './dashboard/user/UserEdit';
import { UserList } from './dashboard/user/UserList';
import authProvider from '../provider/authProvider';
import { UserShow } from './dashboard/user/UserShow';

const dataProvider = simpleRestProvider("http://localhost:8080");

const AdminApp = () => (
  <Admin loginPage={Login} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="admins" recordRepresentation={'admin'} list={UserList} edit={UserEdit} create={UserCreate} show={UserShow} hasCreate/>
  </Admin>
);

export default AdminApp;
