import { ArrayInput, Create, NumberInput, SimpleForm, SimpleFormIterator, TextInput } from "react-admin"

export const CarCreate = () => (
  <Create>
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
                <TextInput source="url" />
              </SimpleFormIterator>
            </ArrayInput>
    </SimpleForm>
  </Create>
);