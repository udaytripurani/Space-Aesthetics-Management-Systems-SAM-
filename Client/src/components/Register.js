import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ParticlesBackground from './ParticlesBackground/ParticlesBackground'; // Import the ParticlesBackground component

function Registration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName')
    });
    axios.post("http://localhost:8082/insert", {
      fn: data.get('firstName'),
      ln: data.get('lastName'),
      email: data.get('email'),
      pw: data.get('password')
    })
    .then((response) => {
      console.log(response.data);
      navigate('/login');
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="particles-container"> {/* Add a div with class "particles-container" */}
      <ParticlesBackground /> {/* Add the ParticlesBackground component */}
      <Container maxWidth="xs">
        <Typography variant="h4" align="center">
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Last Name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={event => setLastName(event.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Registration;
