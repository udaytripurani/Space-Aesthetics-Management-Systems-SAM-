import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUsers, faCalendarAlt, faCogs } from '@fortawesome/free-solid-svg-icons';
import './AboutSAM.css';

function AboutSAM() {
  return (
    <div className="about-sam-container">
      <Typography variant="h2" gutterBottom>About SAM</Typography>
      <Typography variant="body1" gutterBottom>
        SAM is a comprehensive space and aesthetics management system designed to help businesses optimize their office space for efficiency and productivity while creating a visually appealing environment that enhances their brand image and inspires their employees.
      </Typography>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6} md={3}>
          <div className="icon-container">
            <FontAwesomeIcon icon={faBuilding} className="icon" />
          </div>
          <Typography variant="h5" className="feature-title">Space Management</Typography>
          <Typography variant="body1" className="feature-description">
            Efficiently manage your office space by tracking desk assignments, scheduling conference rooms, and managing resources such as printers and office supplies.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className="icon-container">
            <FontAwesomeIcon icon={faUsers} className="icon" />
          </div>
          <Typography variant="h5" className="feature-title">Employee Scheduling</Typography>
          <Typography variant="body1" className="feature-description">
            Create and manage employee schedules with ease. Set employee availability, track time off requests, and quickly make adjustments as needed.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className="icon-container">
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
          </div>
          <Typography variant="h5" className="feature-title">Asset Management</Typography>
          <Typography variant="body1" className="feature-description">
            Keep track of your company's assets such as laptops, monitors, and other equipment. Assign assets to employees and track their usage.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className="icon-container">
            <FontAwesomeIcon icon={faCogs} className="icon" />
          </div>
          <Typography variant="h5" className="feature-title">Interior Design Tools</Typography>
          <Typography variant="body1" className="feature-description">
            Visualize and plan office layouts with our built-in design tools. Experiment with different furniture arrangements and color schemes.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutSAM;
