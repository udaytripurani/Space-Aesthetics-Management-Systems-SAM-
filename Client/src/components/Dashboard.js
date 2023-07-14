import React, { useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import { useNavigate } from 'react-router-dom';
import AuthService from './AuthService';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: 'calc(100% - 64px)',
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: 64,
    height: 'calc(100% - 64px)',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  container: {
    paddingTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

function Dashboard(props) {
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
    <div className={classes.root}>
      <CssBaseline />
     
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        <List>
  <ListItem button>
    <ListItemIcon>
      <DashboardIcon />
    </ListItemIcon>
    <ListItemText primary="Dashboard" />
  </ListItem>
  <ListItem button onClick={() => navigate('/settings')}>
    <ListItemIcon>
      <SettingsIcon />
    </ListItemIcon>
    <ListItemText primary="Settings" />
  </ListItem>
</List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Container maxWidth="lg" className={classes.container}>
          <Typography variant="h2" gutterBottom>
            Welcome to your Space & Aesthetics Management Systems (SAM) Dashboard!
          </Typography>
          <Typography variant="h4" gutterBottom>
            Here you can manage your space inventory and aesthetics:
          </Typography>
          <ul>
            <li>View and manage your office space inventory</li>
            <li>Track occupancy and understand how much space is being used</li>
            <li>Forecast future space needs based on growth trends</li>
            <li>Manage aesthetics such as furniture, artwork, and decor</li>
          </ul>
          {/* Add the Employee and SpaceInventoryForm components or any other components you need */}
        </Container>
      </main>
      
    </div>
  );
}

export default Dashboard;
