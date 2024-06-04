import React from 'react';
import { CreateProps, Create, SimpleForm, TextInput } from 'react-admin';

interface UserCreateProps extends CreateProps {
}

export const UserCreate = (props: UserCreateProps) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="password" type="password" />
    </SimpleForm>
  </Create>
);
