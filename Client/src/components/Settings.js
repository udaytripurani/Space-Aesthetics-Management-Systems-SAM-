import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from './AuthService';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Button,
  Paper,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 800,
    width: '100%',
  },
  section: {
    marginTop: theme.spacing(3),
    textAlign: 'left',
  },
  button: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
}));

function Settings(props) {
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
      navigate('/login');
    }
  }, []);

  function handleLogout() {
    AuthService.logout();
    props.setIsLoggedIn(false);
    navigate('/login');
  }

  return (
    <Container component="main" className={classes.container}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4">
          Settings Page
        </Typography>
        <Typography component="p" variant="subtitle1" className={classes.section}>
          Welcome to the settings page! Here, you can configure various settings for your account and customize your experience.
        </Typography>
        <Typography component="h2" variant="h5" className={classes.section}>
          Account Settings
        </Typography>
        <Typography component="p" variant="subtitle1" className={classes.section}>
          Update your email address or password, configure two-factor authentication, and manage other security settings for your account.
        </Typography>
        <Grid container spacing={2} className={classes.section}>
          <Grid item>
            <Button variant="contained" color="primary" className={classes.button}>
              Change Email
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" className={classes.button}>
              Change Password
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" className={classes.button}>
              Two-Factor Authentication
            </Button>
          </Grid>
        </Grid>
        <Typography component="h2" variant="h5" className={classes.section}>
          Appearance Settings
        </Typography>
        <Typography component="p" variant="subtitle1" className={classes.section}>
          Customize the appearance of the application, including colors, fonts, and other visual elements.
        </Typography>
        <Grid container spacing={2} className={classes.section}>
          <Grid item>
            <Button variant="contained" color="primary" className={classes.button}>
              Change Theme
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" className={classes.button}>
              Change Font
            </Button>
          </Grid>
        </Grid>
        <Typography component="h2" variant="h5" className={classes.section}>
          Notification Settings
        </Typography>
        <Typography component="p" variant="subtitle1" className={classes.section}>
          Configure how you receive notifications from the application, including email, push notifications, and in-app notifications.
</Typography>
<Grid container spacing={2} className={classes.section}>
<Grid item>
<Button variant="contained" color="primary" className={classes.button}>
Email Notifications
</Button>
</Grid>
<Grid item>
<Button variant="contained" color="primary" className={classes.button}>
Push Notifications
</Button>
</Grid>
<Grid item>
<Button variant="contained" color="primary" className={classes.button}>
In-App Notifications
</Button>
</Grid>
</Grid>
<Button
       variant="contained"
       color="secondary"
       className={classes.button}
       onClick={handleLogout}
     >
Logout
</Button>
</Paper>

</Container>
);
}

export default Settings;
