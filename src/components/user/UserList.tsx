import React from 'react';
import { ListProps, List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin';

interface UserListProps extends ListProps {
}

export const UserList: React.FC<UserListProps> = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
