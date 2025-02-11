import React from 'react';
import { Box, Typography, useMediaQuery } from "@mui/material";

export default function EmployeeDisplay({ name, description, image }) {
    const isSmallScreen = useMediaQuery('(max-width:900px)');

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom:'20px' }}>
            <Box sx={{
                width: '80%',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                backgroundColor: 'white',
                height: 'auto',
                padding: '50px',
                boxSizing: 'border-box'
            }}>
                <Box sx={{
                    width: isSmallScreen ? '100%' : '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: isSmallScreen ? '20px' : '0'
                }}>
                    <img style={{ maxHeight: '30vh', objectFit: 'contain' }} src={image} alt={name} />
                    <Typography variant="h6" sx={{ marginTop: '20px', fontWeight: 'bold' }}>{name}</Typography>
                </Box>
                <Box sx={{
                    width: isSmallScreen ? '100%' : '50%',
                    alignItems: 'center',
                    fontSize: '20px',
                    padding: '0 20px',
                    overflow: 'auto',
                    maxHeight: '300px',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word'
                }}>
                    {description}
                </Box>
            </Box>
        </div>
    );
}