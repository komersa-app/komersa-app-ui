import { ArrayInput, Edit, NumberInput, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';

export const CarEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="color" />
            <TextInput source="motorType" />
            <TextInput source="power" />
            <TextInput source="status" />
            <TextInput source="type" />
            <TextInput source="model" />
            <NumberInput source="brand.id" />
            <NumberInput source="price.id" />
            <ArrayInput source="images">
                <SimpleFormIterator>
                    <TextInput source="id" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);