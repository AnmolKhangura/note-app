import React, { createContext, useState, useEffect } from 'react';
import Jwt from '../../utils/jwtUtil';
import axios from '../api/axios';


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState(null);
  
    // Check if the user is authenticated
    useEffect(() => {
      if (Jwt.get()) {
        setIsAuthenticated(true);
        fetchUserName();
      }
    }, []);
  
    // Fetch user name from backend
    const fetchUserName = async () => {
      try {
          const res = await axios.get(`/users`);
          setUserName(res.data);
      } catch (error) {
        console.error('Failed to fetch user name', error);
      }
    };
  
    // Login function that stores the token and updates the auth state
    const login = async (token) => {
      Jwt.set(token);
      setIsAuthenticated(true);
      await fetchUserName();
    };
  
    // Logout function that clears the token and updates the auth state
    const logout = () => {
      Jwt.clear();
      setIsAuthenticated(false);
      setUserName(null);
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout, userName }}>
        {children}
      </AuthContext.Provider>
    );
  };

  export const useAuth = () => React.useContext(AuthContext);


