import React from 'react';
import {  List, Datagrid, TextField, EmailField, EditButton, DeleteButton, ShowButton } from 'react-admin';


export const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <EditButton />
      <DeleteButton />
      <ShowButton />
    </Datagrid>
  </List>
);

