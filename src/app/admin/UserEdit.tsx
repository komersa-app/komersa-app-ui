import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="password" type="password" />
    </SimpleForm>
  </Edit>
);
