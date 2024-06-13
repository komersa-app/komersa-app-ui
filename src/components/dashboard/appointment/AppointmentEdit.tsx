import { DateInput, Edit, NumberInput, ReferenceField, SimpleForm, TextInput } from 'react-admin';

/*
<ReferenceField source="car.id" reference="cars" />
<ReferenceField source="visitor.id" reference="visitors" />
*/
export const AppointmentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="status" />
        </SimpleForm>
    </Edit>
);