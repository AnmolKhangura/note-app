import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Dashboard from './components/pages/Dashboard';
import { loginEmail, signup, googleAuth} from './api/authService';
import { useAuth } from '../context/AuthContext';
import './App.css';

function App() {

  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const response = await loginEmail(email, password);
      const token = response?.data?.token;
      if (token) {
        login(token);
        toast.success('Logged in successfully');
        navigate('/dashboard');
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      const msg = error?.response?.data?.error || 'Login failed';
      if (error?.response?.status === 401) {
        toast.error('Invalid credentials');
      } else {
        toast.error(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (name, email, password) => {
    setLoading(true);
    try {
      const response = await signup(name, email, password);
      // If backend returns a token after signup, optionally log user in
      const token = response?.data?.token;
      if (token) {
        login(token);
        toast.success('Account created and logged in');
        navigate('/dashboard');
      } else {
        toast.success('Account created. Please log in.');
        navigate('/login');
      }
    } catch (error) {
      console.error('Signup error:', error);
      const msg = error?.response?.data?.error || 'Signup failed';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    // this causes a redirect to the backend's Google OAuth endpoint
    googleAuth();
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} handleGoogle={handleGoogle} isLoading={loading} />} />
        <Route path="/signup" element={<SignUp handleSignup={handleSignup} handleGoogle={handleGoogle} isLoading={loading} />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
