import { Admin, EditGuesser, ListGuesser, Login, Resource, ShowGuesser } from 'react-admin';
import { UserCreate } from './dashboard/user/UserCreate';
import { UserEdit }from './dashboard/user/UserEdit';
import { UserList } from './dashboard/user/UserList';
import authProvider from '../provider/authProvider';
import { UserShow } from './dashboard/user/UserShow';
import dataProvider from '@/provider/data-provider';
import { CarList } from './dashboard/car/CarList';
import { CarEdit } from './dashboard/car/CarEdit';
import { CarShow } from './dashboard/car/CarShow';
import { CarCreate } from './dashboard/car/CarCreate';
import { AppointmentList } from './dashboard/appointment/AppointmentList';
import { AppointmentEdit } from './dashboard/appointment/AppointmentEdit';
import { AppointmentShow } from './dashboard/appointment/AppointmentShow';


const AdminApp = () => (
  <Admin loginPage={Login} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="admins" recordRepresentation={'admin'} list={UserList} edit={UserEdit} create={UserCreate} show={UserShow} />
    <Resource name="cars" recordRepresentation={'car'} list={CarList} edit={CarEdit} show={CarShow} create={CarCreate} />
    <Resource name="appointments" recordRepresentation={'appointment'} list={AppointmentList} edit={AppointmentEdit} show={AppointmentShow} />
  </Admin>
);

export default AdminApp;
