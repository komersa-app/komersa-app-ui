import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';



export const UserEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="password" type="password" />
      </SimpleForm>
    </Edit>
  );
};

