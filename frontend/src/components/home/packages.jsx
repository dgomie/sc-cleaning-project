import React from 'react'
import { Grid, Paper, Box, Typography, Button, useMediaQuery } from '@mui/material'

export default function Packages() {
    const isSmallScreen = useMediaQuery('(max-width:900px)')

    return (
        <Box
            sx={{
                height: isSmallScreen ? 'auto' : '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: isSmallScreen ? 2 : 0,
                marginTop: isSmallScreen ? '80px' : '50px'
            }}
        >
            <Grid container spacing={isSmallScreen ? 2 : 4} justifyContent="center">
                {[1, 2, 3].map((item) => (
                    <Grid item key={item} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Paper
                            sx={{
                                width: isSmallScreen ? '100%' : 300, // Adjust width based on screen size
                                height: isSmallScreen ? 'auto' : 500, // Adjust height based on screen size
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                textAlign: 'center',
                                padding: isSmallScreen ? 2 : 5,

                            }}
                        >
                            <Typography variant="h5" component="div" sx={{ marginTop: 2 }}>
                                Package {item} Title
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ margin: 2 }}>
                                This is some information about Package {item}. It includes details and features.
                            </Typography>
                            <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>
                                Learn More
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}