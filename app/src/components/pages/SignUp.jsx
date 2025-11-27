import { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, CircularProgress } from '@mui/material';

const Signup = ({ handleSignup, handleGoogle, isLoading=false }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Call the signup handler
    handleSignup(name, email, password);
  };

  return (
    <Card sx={{ maxWidth: 400, margin: '0 auto', marginTop: '2rem' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Sign Up</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={isLoading}>
            {isLoading ? <CircularProgress size={20} color="inherit" /> : 'Sign Up'}
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

export default Signup;