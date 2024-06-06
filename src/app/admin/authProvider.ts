import { AuthProvider } from 'react-admin';
import { fetchUtils } from 'ra-core';

const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const request = new Request('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    const response = await fetchUtils.fetchJson(request);
    const { token } = response.json;
    localStorage.setItem('token', token);
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
