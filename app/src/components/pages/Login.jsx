import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

const Login = ({ handleLogin, handleGoogle, isLoading=false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the login handler
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
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={isLoading}>
            {isLoading ? <CircularProgress size={20} color="inherit" /> : 'Login'}
          </Button>
          <hr className='line'/>
          <Button type="button" variant="outlined" color="primary" fullWidth onClick={handleGoogle}>
            Continue with Google
          </Button>
        </form>
        <Box sx={{ marginTop: '1rem', textAlign: 'center' }}>
          <Typography variant="body2">
            Don&apos;t have an account?{' '}
            <Link to="/signup" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 'bold' }}>
              Sign Up
            </Link>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Login;
