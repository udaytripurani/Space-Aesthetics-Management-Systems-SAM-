import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import AuthService from './AuthService';
import ParticlesBackground from './ParticlesBackground/ParticlesBackground';
import './Login.css';

function Login(props) {
    console.log('Login component rendered');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ email, password });
    AuthService.login(email, password) // Use AuthService for login request
      .then(res => {
        if (res.status === 'success') {
          props.setIsLoggedIn(true);
          navigate('/dashboard');
        } else {
          alert('Invalid email or password');
        }
      })
      .catch(err => {
        console.log(err);
        alert('An error occurred');
      });
  }

  return (
    <div className="particles-container">
      <ParticlesBackground />
     <Container maxWidth="xs">
      <Typography variant="h4" align="center">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
      </form>
    </Container>
    </div>
  );
}

export default Login;
