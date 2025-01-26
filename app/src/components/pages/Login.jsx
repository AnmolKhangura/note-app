import { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const Login = ({ handleLogin, handleGoogle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the login handler (probably pass email & password)
    handleLogin(email, password);
  };

  return (
    <Card sx={{ maxWidth: 400, margin: '0 auto', marginTop: '2rem' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <hr className='line'/>
          <Button type="button" variant="outlined" color="primary" fullWidth onClick={handleGoogle}>
            Continue with Google
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
