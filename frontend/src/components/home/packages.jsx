import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography, Button, useMediaQuery, Link, Modal, TextField, FormControlLabel, Checkbox } from '@mui/material';

const packages = [
  { 
    title: 'Package 1 Title', 
    info: 'This is some information about Package 1. It includes details and features.', 
    price: '$100',
    checkboxOptions: [
      { label: 'Extra Detail Long Bathroom Clean', price: '$20' },
      { label: 'Option 2', price: '$10' },
      { label: 'Option 3', price: '$15' }
    ]
  },
  { 
    title: 'Package 2 Title', 
    info: 'This is some information about Package 2. It includes details and features.', 
    price: '$200',
    checkboxOptions: [
      { label: 'Option A', price: '$25' },
      { label: 'Option B', price: '$30' },
      { label: 'Option C', price: '$35' }
    ]
  },
  { 
    title: 'Package 3 Title', 
    info: 'This is some information about Package 3. It includes details and features.', 
    price: '$300',
    checkboxOptions: [
      { label: 'Option X', price: '$40' },
      { label: 'Option Y', price: '$45' },
      { label: 'Option Z', price: '$50' }
    ]
  }
];

function Packages() {
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const [open, setOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [errors, setErrors] = useState({ sqft: '', bedrooms: '', bathrooms: '' });

  useEffect(() => {
    if (selectedPackage) {
      const basePrice = parseFloat(selectedPackage.price.replace('$', ''));
      const optionsPrice = selectedOptions.reduce((acc, option) => acc + parseFloat(option.price.replace('$', '')), 0);
      setTotalPrice(basePrice + optionsPrice);
    }
  }, [selectedPackage, selectedOptions]);

  const handleOpen = (pkg) => {
    setSelectedPackage(pkg);
    setSelectedOptions([]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPackage(null);
    setTotalPrice(0);
  };

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((opt) => opt !== option);
      } else {
        return [...prevSelectedOptions, option];
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isNaN(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Enter numbers only' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const hasErrors = Object.values(errors).some((error) => error !== '');

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
                marginTop: isSmallScreen ? '0px' : '100px'
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
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Link href="/services" underline="none">
                  <Button variant="contained" color="white" sx={{ marginBottom: 2 }}>
                    Details
                  </Button>
                </Link>
                <Button variant="contained" color="primary" sx={{ marginBottom: 2, marginLeft: '20px' }} onClick={() => handleOpen(pkg)}>
                  Schedule
                </Button>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          {selectedPackage && (
            <>
              <Typography variant="h6" component="h2">
                {selectedPackage.title}
              </Typography>
              <TextField
                fullWidth
                label="Square Feet"
                margin="normal"
                // type="number"
                name="sqft"
                onChange={handleInputChange}
                error={!!errors.sqft}
                helperText={errors.sqft}
              />
              <TextField
                fullWidth
                label="Number of Bedrooms"
                margin="normal"
                // type="number"
                name="bedrooms"
                onChange={handleInputChange}
                error={!!errors.bedrooms}
                helperText={errors.bedrooms}
              />
              <TextField
                fullWidth
                label="Number of Bathrooms"
                margin="normal"
                // type="number"
                name="bathrooms"
                onChange={handleInputChange}
                error={!!errors.bathrooms}
                helperText={errors.bathrooms}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
                {selectedPackage.checkboxOptions && selectedPackage.checkboxOptions.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox onChange={() => handleCheckboxChange(option)} />}
                    label={`${option.label} + ${option.price}`}
                  />
                ))}
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
              <Button variant="contained" color="primary" onClick={handleClose} disabled={hasErrors}>
                  Continue
                </Button>
                <Typography variant="h6">
                  Total: ${totalPrice.toFixed(2)}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default Packages;