import React from 'react';
import { Box, Typography, TextField, Button, Grid } from "@mui/material";

export default function ContactForm() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '80%', alignItems: 'center', padding: '20px',  backgroundColor:"white", borderRadius: '10px', maxWidth: '600px', marginTop:'150px' }}>
        
            <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        sx={{ backgroundColor: 'white' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        sx={{ backgroundColor: 'white' }}
                    />
                </Grid>
            </Grid>
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: '20px', backgroundColor: 'white' }}
            />
            <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: '20px', backgroundColor: 'white' }}
            />
            <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                sx={{ marginBottom: '20px', backgroundColor: 'white' }}
            />
            <Button variant="contained" color="primary" sx={{ background: 'linear-gradient(90deg, #0a1e30 0%, #044f9a 85%, #0a1e30 100%)' }}>
                Submit
            </Button>
        </Box>
    );
}