import { ArrayField, ChipField, Datagrid, ImageField, List, NumberField, SingleFieldList, TextField } from 'react-admin';

export const CarList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="color" />
            <TextField source="motorType" />
            <TextField source="power" />
            <TextField source="status" />
            <TextField source="type" />
            <TextField source="model" />
            <NumberField label="brand" source="brand.name" />
            <ImageField label="logo" source='brand.logo'/>
        </Datagrid>
    </List>
);

// TODO: use enum in react admin
