import React from 'react';
import { Grid, Typography, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';

function EmployeeManagement() {
  const employees = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@example.com' },
    { id: 3, firstName: 'Bob', lastName: 'Smith', email: 'bobsmith@example.com' },
  ];

  return (
    <div className="employee-management">
      <Typography variant="h4" gutterBottom>Employee Management</Typography>
      <Button variant="contained" color="primary" href="/employees/create" style={{marginBottom: '20px'}}>Create Employee</Button>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <Table style={{border: '1px solid black'}}>
            <TableHead>
              <TableRow>
                <TableCell style={{fontWeight: 'bold'}}>ID</TableCell>
                <TableCell style={{fontWeight: 'bold'}}>First Name</TableCell>
                <TableCell style={{fontWeight: 'bold'}}>Last Name</TableCell>
                <TableCell style={{fontWeight: 'bold'}}>Email</TableCell>
                <TableCell style={{fontWeight: 'bold'}}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.firstName}</TableCell>
                  <TableCell>{employee.lastName}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" href={`/employees/${employee.id}`}>Edit</Button>
                    <Button variant="contained" color="secondary" style={{marginLeft: '10px'}}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </div>
  );
}

export default EmployeeManagement;
