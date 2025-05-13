import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState(''); 
  const [isError, setIsError] = useState(false); 
  const [formError, setFormError] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setFormError(true);
      setStatusMessage('Please fill out all fields.');
      setIsError(true);
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        setStatusMessage('Your messages has sent successfully!');
        setIsError(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        }); 
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatusMessage('Failed to send email. Please try again.');
        setIsError(true);
      });
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.phone &&
    formData.message;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        maxWidth: '600px',
        marginTop: '150px',
      }}
    >
      <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            name="firstName"
            variant="outlined"
            fullWidth
            value={formData.firstName}
            onChange={handleChange}
            sx={{ backgroundColor: 'white' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            value={formData.lastName}
            onChange={handleChange}
            sx={{ backgroundColor: 'white' }}
          />
        </Grid>
      </Grid>
      <TextField
        label="Email"
        name="email"
        variant="outlined"
        fullWidth
        value={formData.email}
        onChange={handleChange}
        sx={{ marginBottom: '20px', backgroundColor: 'white' }}
      />
      <TextField
        label="Phone"
        name="phone"
        variant="outlined"
        fullWidth
        value={formData.phone}
        onChange={handleChange}
        sx={{ marginBottom: '20px', backgroundColor: 'white' }}
      />
      <TextField
        label="Message"
        name="message"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        sx={{ marginBottom: '20px', backgroundColor: 'white' }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!isFormValid} 
        sx={{
          background: isFormValid
            ? 'linear-gradient(90deg, #0a1e30 0%, #044f9a 85%, #0a1e30 100%)'
            : 'gray',
        }}
      >
        Submit
      </Button>
      {statusMessage && (
        <Typography
          variant="body1"
          sx={{
            marginTop: '20px',
            color: isError ? 'red' : 'green', 
          }}
        >
          {statusMessage}
        </Typography>
      )}
      {formError && (
        <Typography
          variant="body2"
          sx={{
            marginTop: '10px',
            color: 'red',
          }}
        >
          Please fill out all fields before submitting.
        </Typography>
      )}
    </Box>
  );
}
