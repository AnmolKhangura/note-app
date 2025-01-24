import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Dashboard from './components/pages/Dashboard';
import { login, signup } from './api/authService';
import './App.css';

function App() {
  const handleLogin = (email, password) => {
    login(email, password)
      .then(response => {
        console.log(response.data); // Handle the response data
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

  return (
    <div>
      <Dashboard />
      <Login handleLogin={handleLogin} />
      <SignUp handleSignup={handleSignup} />
    </div>
  );
}

export default App;
