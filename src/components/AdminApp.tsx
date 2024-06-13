import { Admin, Login, Resource } from 'react-admin';
import { UserCreate } from './dashboard/user/UserCreate';
import { UserEdit }from './dashboard/user/UserEdit';
import { UserList } from './dashboard/user/UserList';
import authProvider from '../provider/authProvider';
import { UserShow } from './dashboard/user/UserShow';
import dataProvider from '@/provider/data-provider';


const AdminApp = () => (
  <Admin loginPage={Login} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="admins" recordRepresentation={'admin'} list={UserList} edit={UserEdit} create={UserCreate} show={UserShow} hasCreate/>
  </Admin>
);

export default AdminApp;
