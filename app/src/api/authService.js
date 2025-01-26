import axios from './axios';

export const loginEmail = (email, password) => {
  return axios.post('/auth/login', { email, password });
};

export const signup = (name, email, password) => {
  return axios.post('/auth/register', { name, email, password });
};

export const googleAuth = () => {
  window.location.href = 'http://localhost:3000/auth/google';
};