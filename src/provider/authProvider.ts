import { AuthProvider } from 'react-admin';
import { loginApi } from './api';

const authProvider: AuthProvider = {
  login: async ({ username, password } ) => {
    const res = await loginApi().login({
      name: username,
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
