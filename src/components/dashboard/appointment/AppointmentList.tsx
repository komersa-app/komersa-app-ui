import { Datagrid, DateField, List, NumberField, ReferenceField, TextField } from 'react-admin';
/*
            <ReferenceField source="car.id" reference="cars" link="show" />
            <ReferenceField source="visitor.id" reference="visitors" link="show" />
*/
export const AppointmentList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <DateField source="datetime" />
            <TextField source="visitor.email" />
            <TextField source="message" />
            <TextField source="status" />
            <TextField source='car.brand.name' />
            <TextField source="car.model" />
        </Datagrid>
    </List>
);