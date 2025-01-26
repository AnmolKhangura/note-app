import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Dashboard from './components/pages/Dashboard';
import { loginEmail, signup, googleAuth} from './api/authService';
import { useAuth } from '../context/AuthContext';
import './App.css';

function App() {

  const { isAuthenticated, login, logout } = useAuth();

  const handleLogin = (email, password) => {
    loginEmail(email, password)
      .then(response => {
        console.log(response.data); // Handle the response data
        login(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    console.log('Logging in with', email, password);
  };

  const handleSignup = (name, email, password) => {
    signup(name, email, password)
      .then(response => {
        console.log(response.data); // Handle the response data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    console.log('Signing up with', name, email, password);
  };

  const handleGoogle = () => {
    googleAuth()
      .then(response => {
        console.log(response.data); // Handle the response data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    console.log('Logging in with Google');
  };

  return (
    <div>
      {isAuthenticated ? <Dashboard /> : <Login handleLogin={handleLogin} handleGoogle={handleGoogle}/>}
      <SignUp handleSignup={handleSignup} handleGoogle={handleGoogle}/>
       

    </div>
  );
}

export default App;
