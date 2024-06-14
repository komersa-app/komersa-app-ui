import { ArrayField, Datagrid, DateField, ImageField, NumberField, Show, SimpleShowLayout, SingleFieldList, TextField, UrlField } from 'react-admin';

export const CarShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="color" />
            <TextField source="motorType" />
            <TextField source="power" />
            <TextField source="status" />
            <TextField source="type" />
            <TextField source="model" />
            <SingleFieldList>
                <NumberField source="brand.id" />
                <TextField source='brand.name' />
                <ImageField source='brand.logo' />
            </SingleFieldList>
            <SingleFieldList>
                <NumberField source='price.id' />
                <NumberField source='price.ampount'/>
                <DateField source='price.changeDateTime'/>
            </SingleFieldList>
            <ArrayField source="images">
                <SingleFieldList>
                    <TextField label="Image Id" source="id" />
                    <ImageField label="Image Url" source='url'/>
                </SingleFieldList>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
    // TODO: Enhance the image show
);