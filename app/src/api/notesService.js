import axios from './axios';

export const getNotes = () => {
  return axios.get('/notes');
};

export const addNote = (note) => {
  return axios.post('/notes', note);
};

export const updateNote = (id, note) => {
  return axios.put(`/notes/${id}`, note);
};

export const deleteNote = (id) => {
  return axios.delete(`/notes/${id}`);
};

export default { getNotes, addNote, updateNote, deleteNote };