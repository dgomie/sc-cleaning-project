import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography, Button, useMediaQuery, Link, Modal, TextField, FormControlLabel, Checkbox } from '@mui/material';

const packages = [
  { 
    title: 'Classic Clean', 
    info: 'Our Classic Clean package includes dusting, vacuuming, mopping, and general tidying up of all rooms. Perfect for regular maintenance.', 
    price: '$100',
    serviceId: 6,
  },
  { 
    title: 'Deep Clean', 
    info: 'The Deep Clean package offers a thorough cleaning of your home, including scrubbing bathrooms, kitchens, and hard-to-reach areas. Ideal for a seasonal refresh.', 
    price: '$200',
    serviceId: 7
  },
  { 
    title: 'Move in / Move out', 
    info: 'Our Move In/Move Out package ensures your new or old home is spotless. Includes deep cleaning of all rooms, appliances, and fixtures.', 
    price: '$300',
    serviceId: 8,
  }
];

function Packages() {
  const isSmallScreen = useMediaQuery('(max-width:900px)');


  return (
    <Box
      sx={{
        padding: isSmallScreen ? 2 : 0,
        marginTop: isSmallScreen ? '80px' : '50px'
      }}
    >
      <Grid container spacing={isSmallScreen ? 2 : 4} justifyContent="center">
        {packages.map((pkg, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
              sx={{
                width: isSmallScreen ? 300 : '100%', // Adjust width based on screen size
                height: isSmallScreen ? 500 : '60vh', // Adjust height based on screen size
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'center',
                padding: isSmallScreen ? 2 : 5,
                marginTop: isSmallScreen ? '-20px' : '100px',
                marginBottom: isSmallScreen ? '50px' : '0px',
                boxShadow: '16px 16px 16px rgba(0, 0, 0, 0.7)',
                borderRadius:'40px',
              }}
            >
                <Typography variant="h5" component="div" sx={{ marginTop: 2, fontWeight: 'bold', color: '#333', fontSize:'32px' }}>
                {pkg.title}
              </Typography>
              <Typography variant="body1" component="div" sx={{ margin: 2, color: '#333', fontSize:'20px' }}>
                {pkg.info}
              </Typography>
              <Typography variant="h6" component="div" sx={{ margin: 2, fontWeight: 'bold', color: '#007BFF', fontSize:'36px' }}>
                {pkg.price}
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Link href="/services" underline="none">
                  <Button variant="contained" color="white" sx={{ marginBottom: 2 }}>
                    Details
                  </Button>
                </Link>
                <Link href={`/booking/?service_id=${pkg.serviceId}`} underline='none'>
                  <Button variant="contained" color="primary" sx={{ marginBottom: 2, marginLeft: '20px' }} onClick={() => handleOpen(pkg)}>
                    Schedule
                  </Button>
                </Link>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Packages;