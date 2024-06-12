import { AuthProvider } from 'react-admin';
import { loginApi } from './api';
import { LoginDtoRequest } from './typescript-client';

const authProvider: AuthProvider = {
  login: async ({ name, password } : LoginDtoRequest) => {
    const res = await loginApi().login({
      name: name,
      password: password
    });
    if(res.data.token){
      localStorage.setItem('token',res.data.token);
      return Promise.resolve();
    }
    return Promise.reject();
    
  },
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
