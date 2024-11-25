import Login from './components/Login';
import Signup from './components/SignUp';
import axios from "./api/axios";
import './App.css'

function App() {
  const handleLogin = (email, password) => {

    axios.post("/login", {email, password })
      .then(response => {
        console.log(response.data); // Handle the response data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    // Call your login API here
    console.log('Logging in with', email, password);
  };
  const handleSignup = (email, password) => {
    // Call your signup API here
    console.log('Signing up with', email, password);
  };

  return (
    <div>
      <Login handleLogin={handleLogin} />
      <Signup handleSignup={handleSignup} />
    </div>
  );
}

export default App;
