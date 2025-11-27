import React, { createContext, useState, useEffect } from 'react';
import Jwt from '../utils/jwtUtil';


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const navigate = useNavigate();
  
    // Check if the user is authenticated
    useEffect(() => {
      if (Jwt.get()) {
        setIsAuthenticated(true);
      }
    }, []);
  
    // Login function that stores the token and updates the auth state
    const login = (token) => {
      Jwt.set(token);
      setIsAuthenticated(true);
    //   navigate('/dashboard'); // Redirect to dashboard after login
    };
  
    // Logout function that clears the token and updates the auth state
    const logout = () => {
      Jwt.clear();
      setIsAuthenticated(false);
    //   navigate('/login'); // Redirect to login after logout
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };

  export const useAuth = () => React.useContext(AuthContext);


