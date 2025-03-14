import React, { useState } from 'react';
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { useNavigate } from 'react-router-dom';

export default function ServiceBox({ title, description, beforeImage, afterImage, onClick }) {
  const isSmallScreen = useMediaQuery('(max-width:900px), (max-height:800px)');
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();


  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const handleClick = () => {
    navigate('/', {state: {scrollToPackages: true }})
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      <Box sx={{
        width: '96vw',
        height: '33vh', // Set height to 1/3 of the viewport height
        textAlign: 'center',
        '@media (max-width: 950px), (max-height:800px)': {
          height: 'auto',
          padding: '20px'
        }
      }}>
        <Grid container sx={{
          backgroundColor: 'white',
          borderRadius: '40px',
          display: 'flex',
          justifyContent: 'center', // Center items horizontally
          alignItems: 'center',
          height: '100%', // Ensure the Grid takes up the full height of the Box
          padding: '50px',
          flexDirection: isSmallScreen ? 'column' : 'row', // Use column layout on small screens
          '@media (max-width: 1200px), (max-height:800px)': {
            padding: '20px'
          }
        }}>
          <Grid item xs={12} md={6} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center', // Center content vertically
            height: '100%', // Ensure the Grid item takes up the full height
            marginBottom: { xs: '20px', md: '0' }
          }}>
            <Typography sx={{
              color: 'white',
              fontSize: '24px',
              maxWidth: '900px',
              marginBottom: '20px',
              background: 'linear-gradient(90deg, #0a1e30 0%, #044f9a 85%, #0a1e30 100%)',
             borderRadius:'12px',
              width: isSmallScreen ? '100%' : '50%',
              boxShadow: '4px 8px 8px rgba(0, 0, 0, 0.6)'
              
            }}>
              {title}
            </Typography>
            <Typography sx={{
              color: 'black',
              fontSize:  '16px',
              maxWidth: '700px',
              marginBottom: '20px'
            }}>
              {description}
            </Typography>
            {isSmallScreen && (
                <Button  sx={{ marginBottom:'20px'}}variant="contained" color="primary" onClick={onClick}>
                before and after photos
              </Button>
            )}
            <Button sx={{              background: 'linear-gradient(90deg, #0a1e30 0%, #044f9a 85%, #0a1e30 100%)'}} variant="contained" color="primary" onClick={handleClick}>
              View Package
            </Button>
         
          </Grid>
          {!isSmallScreen && (
            <Grid item xs={12} md={6} sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%', // Ensure the Grid item takes up the full height
              padding: '10px', // Add padding around the image
              position: 'relative',
            }}>
              <Box
                sx={{
                  width: '30%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  position: 'relative',
                  cursor: 'pointer',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
              >
               
                <ImgComparisonSlider>
                  <img slot="first" src={beforeImage} alt="Before" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                  <img slot="second" src={afterImage} alt="After" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </ImgComparisonSlider>
                <span style={{marginTop:'20px', fontWeight:'bold'}}>Before and After</span>
                {hover && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      fontSize: '18px',
                      textAlign: 'center',
                      borderRadius: 'inherit'
                    }}
                  >
                    Click to fullscreen
                  </Box>
                )}
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
}