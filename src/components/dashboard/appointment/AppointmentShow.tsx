import { ArrayField, Button, Datagrid, DateField, ImageField, NumberField, ReferenceField, Show, SimpleShowLayout, SingleFieldList, TextField, UrlField } from 'react-admin';
/*
            <ReferenceField source="car.id" reference="cars" />
            <ReferenceField source="visitor.id" reference="visitors" />
 */
export const AppointmentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <DateField source="datetime" />
            <TextField source="status" />
            <TextField source="message" />
            <SingleFieldList>
                <NumberField source="visitor.id" />
                <TextField source='visitor.name' />
                <TextField source='visitor.email'/>
            </SingleFieldList>
            <SingleFieldList>
                <NumberField source="car.id" />
                <TextField source="car.name" />
                <TextField source="car.description" />
                <TextField source="car.color" />
                <TextField source="car.motorType" />
                <TextField source="car.power" />
                <TextField source="car.status" />
                <TextField source="car.type" />
                <TextField source="car.model" />
                <SingleFieldList>
                    <NumberField source="car.brand.id" />
                    <TextField source='car.brand.name' />
                    <ImageField source='car.brand.logo' />
                </SingleFieldList>
                <SingleFieldList>
                    <NumberField source='car.price.id' />
                    <NumberField source='car.price.ampount'/>
                    <DateField source='car.price.changeDateTime'/>
                </SingleFieldList>
                <ArrayField source="car.images">
                    <TextField source="id" />
                    <ImageField source='url'/>
                </ArrayField>
            </SingleFieldList>
        </SimpleShowLayout>
    </Show>
);

// TODO: Click button to view the car
//       fix : show car