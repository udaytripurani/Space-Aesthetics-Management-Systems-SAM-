import React from 'react';
import { Typography, Grid } from '@material-ui/core';

function Offices() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>Office Management</Typography>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6}>
          <div className="card">
            <img src="https://via.placeholder.com/350x150" alt="Office 1" />
            <div className="container">
              <h4><b>Office 1</b></h4>
              <p>Location: 123 Main St</p>
              <p>Capacity: 50 employees</p>
              <p>Inventory Tracking:</p>
              <ul>
                <li>Furniture: 20 chairs, 10 desks, 5 cabinets</li>
                <li>Equipment: 2 printers, 1 scanner, 1 projector</li>
                <li>Supplies: 50 reams of paper, 100 pens, 50 notepads</li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="card">
            <img src="https://via.placeholder.com/350x150" alt="Office 2" />
            <div className="container">
              <h4><b>Office 2</b></h4>
              <p>Location: 456 Park Ave</p>
              <p>Capacity: 100 employees</p>
              <p>Inventory Tracking:</p>
              <ul>
                <li>Furniture: 50 chairs, 20 desks, 10 cabinets</li>
                <li>Equipment: 3 printers, 2 scanners, 1 projector</li>
                <li>Supplies: 100 reams of paper, 200 pens, 100 notepads</li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Offices;
