import axios from './axios';

export const login = (email, password) => {
  return axios.post('/auth/login', { email, password });
};

export const signup = (name, email, password) => {
  return axios.post('/auth/register', { name, email, password });
};