import Login from './components/Login';
import Signup from './components/SignUp';
import Dashboard from './components/Dashboard'
import axios from "./api/axios";
import './App.css'

function App() {
  const handleLogin = (email, password) => {

    axios.post("/auth/login", {email, password })
      .then(response => {
        console.log(response.data); // Handle the response data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    // Call login API here
    console.log('Logging in with', email, password);
  };
  const handleSignup = (name, email, password) => {
    // Call signup API here
    console.log('Signing up with', email, password);
  };

  return (
    <div>
      <Dashboard />
      <Login handleLogin={handleLogin} />
      <Signup handleSignup={handleSignup} />
    </div>
  );
}

export default App;
