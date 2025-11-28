import axios from "axios";
import jwtUtil from '../../utils/jwtUtil';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
});

// Attach JWT token to every request if present
instance.interceptors.request.use(
    (config) => {
        const token = jwtUtil.get();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default instance;