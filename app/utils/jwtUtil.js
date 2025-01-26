

const get = () => {
    return sessionStorage.getItem('jwt_token');
};
  
const set = (token) => {
    sessionStorage.setItem('jwt_token', token);
};
  
const clear = () => {
    sessionStorage.removeItem('jwt_token');
};

export default {get, set, clear};