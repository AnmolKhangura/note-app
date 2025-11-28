import axios from './axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const loginEmail = (email, password) => {
  return axios.post('/auth/login', { email, password });
};

export const signup = (name, email, password) => {
  return axios.post('/auth/register', { name, email, password });
};

export const googleAuth = () => {
  window.location.href = `${API_BASE_URL}/auth/google`;
};