import React from 'react';
import { EditProps, Edit, SimpleForm, TextInput } from 'react-admin';

interface UserEditProps extends EditProps {
}

const UserEdit: React.FC<UserEditProps> = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="password" type="password" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
