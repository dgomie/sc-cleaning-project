import React from 'react';
import { Box, Grid, Paper, Typography, Button ,useMediaQuery, Link} from '@mui/material';

const packages = [
  { title: 'Package 1 Title', info: 'This is some information about Package 1. It includes details and features.', price: '$100' },
  { title: 'Package 2 Title', info: 'This is some information about Package 2. It includes details and features.', price: '$200' },
  { title: 'Package 3 Title', info: 'This is some information about Package 3. It includes details and features.', price: '$300' },
];

function Packages() {
    const isSmallScreen = useMediaQuery('(max-width:900px)')
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
                marginTop: isSmallScreen ? '0px': '100px'
              }}
            >
              <Typography variant="h5" component="div" sx={{ marginTop: 2 }}>
                {pkg.title}
              </Typography>
              <Typography variant="body1" component="div" sx={{ margin: 2 }}>
                {pkg.info}
              </Typography>
              <Typography variant="h6" component="div" sx={{ margin: 2 }}>
                {pkg.price}
              </Typography>
              <Link href="/services" underline="none">
                <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>
                  Learn More
                </Button>
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Packages;