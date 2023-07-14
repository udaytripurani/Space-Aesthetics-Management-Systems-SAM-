import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import logo from './logo.png';
import AuthService from './AuthService'; // Import AuthService
import AboutSAM from './AboutSAM'; // Import AboutSAM component
import Pricing from './pricing';
function NavBar(props) {
  const isLoggedIn = props.isLoggedIn;
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    AuthService.logout(); // Call AuthService logout function
    props.setIsLoggedIn(false); // Update parent state
    navigate('/login'); // Redirect to login page
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="SAM Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            AestheticArray
          </Typography>
          {isLoggedIn ? (
            <>
              <Button color="inherit" component={Link} to="/dashboard">
                Dashboard
              </Button>
              
              <Button color="inherit" component={Link} to="/offices">
                Office Space Management
              </Button>
              <Button color="inherit" component={Link} to="http://localhost:3001/design">
                Design Tools
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
              <Button color="inherit" component={Link} to="/payments">
                payments
              </Button>
              
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
              <Button color="inherit" component={Link} to="/about">
            AboutSAM
          </Button>
          <Button color="inherit" component={Link} to="/pricing">
            pricing and planning
          </Button>
            </>
          )}
          
        </Toolbar>
      </AppBar>
      
    </>
  );
}

export default NavBar;
