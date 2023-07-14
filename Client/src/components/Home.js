import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import officeImg from './office.png';
import designImg from './design.png';
import aa from './aa.png';
import './Home.css';

const featureList = [  {    title: 'Office Space Management',    description: 'Efficiently manage your office space by tracking desk assignments, scheduling conference rooms, and managing resources such as printers and office supplies.'  },  {    title: 'Employee Scheduling',    description: 'Create and manage employee schedules with ease. Set employee availability, track time off requests, and quickly make adjustments as needed.'  },  {    title: 'Asset Management',    description: 'Keep track of your company\'s assets such as laptops, monitors, and other equipment. Assign assets to employees and track their usage.'  },  {    title: 'Interior Design Tools',    description: 'Visualize and plan office layouts with our built-in design tools. Experiment with different furniture arrangements and color schemes.'  },  {    title: 'Analytics',    description: 'Track key metrics such as space utilization and employee satisfaction. Use data to make informed decisions about your office management strategy.'  },];

function Home() {

  const handleCTAClick = () => {
    // add your click event handler code here
  }

  return (
  <div style={{ textAlign: 'center' }}>
    <div style={{ borderTop: '5px solid #008080', margin: '20px 0' }}></div>
    <Typography variant="h2" gutterBottom>Welcome to AestheticArray</Typography>
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} sm={6}>
        <img src={officeImg} alt="Office" style={{ width: '100%', height: 'auto' }} />
        <Typography variant="h4" gutterBottom>Efficiently manage your office space</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={designImg} alt="Design" style={{ width: '100%', height: 'auto' }} />
        <Typography variant="h4" gutterBottom>Improve your office aesthetics</Typography>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6} style={{ textAlign: 'right' }}>
          <img src={aa} alt="AestheticArray" style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'left' }}>
          <Typography variant="h4">What is AestheticArray?</Typography>
          <Typography variant="body1" style={{ marginTop: '20px' }}>
            AestheticArray is an innovative software platform that helps businesses manage their office space and improve their aesthetics. With AestheticArray, you can optimize your workspace for efficiency and productivity, while also creating a visually appealing environment that enhances your brand image and inspires your employees.
          </Typography>
        </Grid>
      </Grid>
      <div style={{ marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>Features:</Typography>
        <ul style={{ textAlign: 'left' }}>
          {featureList.map((feature, index) => (
            <li key={index}>
              <Typography variant="h6" style={{ marginBottom: '10px' }}>{feature.title}</Typography>
              <Typography variant="body1">{feature.description}</Typography>
            </li>
          ))}
        </ul>
      </div>
      <div className="cta-button" onClick={handleCTAClick}>
        <Typography variant="h6" style={{ color: 'white' }}>Learn More</Typography>
      </div>
    </Grid>
  </div>
);

}

export default Home;

