import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography, Button, useMediaQuery, Link, List, ListItem, ListItemIcon, ListItemText, Modal, TextField, FormControlLabel, Checkbox } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const packages = [
  { 
    title: 'Classic Clean', 
    info: [
      'Dusting',
      'Vacuuming',
      'Mopping',
      'General tidying up',
      'Window cleaning',
      'Trash removal',
  
    ],
    price: '$100',
    serviceId: 6,
  },
  { 
    title: 'Deep Clean', 
    info: [
      'Scrubbing bathrooms',
      'Cleaning kitchens',
      'Hard-to-reach areas',
      'Baseboard cleaning',
      'Light fixture cleaning',
      'Carpet cleaning',
      
    ],
    price: '$200',
    serviceId: 7
  },
  { 
    title: 'Move in / Move out', 
    info: [
      'Deep clean of all rooms',
      'Cleaning appliances',
      'Cleaning fixtures',
      'Cabinet cleaning',
      'Closet cleaning',
      'Garage cleaning',
   
    ],
    price: '$300',
    serviceId: 8,
  }
];

function Packages() {
  const isSmallScreen = useMediaQuery('(max-width:900px), (max-height: 950px)');
  const isMediumScreen = useMediaQuery('(max-width:1500px)');
  const isLargeScreen = useMediaQuery('(min-width: 2000px)')

  const getFontSize = () => {
    if (isSmallScreen) {
      return '14px';
    } else if (isMediumScreen) {
      return '20px';
    } else if (isLargeScreen) {
      return '26px';
    } else {
      return '22px';
    }
  };

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
    <Box sx={{ width:'100%' }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    marginTop: 2,
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: isMediumScreen ? '24px' : '32px',
                    background: 'linear-gradient(90deg, #0a1e30 0%, #044f9a 85%, #0a1e30 100%)',
                    borderRadius: '30px', 
                    padding: '20px 0px', 
                  }}
                >
                  {pkg.title}
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    fontWeight: 'bold',
                    color: '#007BFF',
                    marginTop: 2, // Add margin to move it lower
                  }}
                >
                  starting at...
                </Typography>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#007BFF', fontSize: isSmallScreen ? '32px':'46px' }}>
                  
                  {pkg.price}
                </Typography>
              </Box>
              <List sx={{ margin: 2, color: '#333', fontWeight:'bold', textAlign: 'left', width:'90%', overflow:'auto' }}>
                {pkg.info.map((item, idx) => (
                  <ListItem key={idx} sx={{ padding: 0 }}>
                    <ListItemIcon>
                      <CheckIcon sx={{ color: '#007BFF' }} />
                    </ListItemIcon>
                    <ListItemText primary={item} primaryTypographyProps={{ fontSize: getFontSize() , fontWeight: 'bold' }} />
                  </ListItem>
                ))}
              </List>
             
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