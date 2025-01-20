import { useEffect } from 'react';
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import image1 from '../../assets/images/SCC 3.jpg';

export default function ServiceBox({ title, description, image }) {
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/' , {state: {scrollToPackages: true } })

  };
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <Box sx={{
                width: '96vw',
                height: '33vh', // Set height to 1/3 of the viewport height
                textAlign: 'center',
                backgroundColor: 'white',
                '@media (max-width: 1200px)': {
                    height: 'auto',
                    padding: '20px'
                }
            }}>
                <Grid container sx={{
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center', // Center items horizontally
                    alignItems: 'center',
                    height: '100%', // Ensure the Grid takes up the full height of the Box
                    padding: '50px',
                    flexDirection: isSmallScreen ? 'column' : 'row', // Use column layout on small screens
                    '@media (max-width: 1200px)': {
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
                            color: 'black',
                            fontSize: '24px',
                            maxWidth: '900px',
                            marginBottom: '20px'
                        }}>
                            {title}
                        </Typography>
                        <Typography sx={{
                            color: 'black',
                            fontSize: '16px',
                            maxWidth: '900px',
                            marginBottom: '20px'
                        }}>
                            {description}
                        </Typography>
                        {/* <Link to='/'> */}
                        <Button variant="contained" color="primary" onClick={handleClick}>
                           View Package
                         </Button>
                        {/* </Link> */}
                    </Grid>
                    {!isSmallScreen && (
                        <Grid item xs={12} md={6} sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%', // Ensure the Grid item takes up the full height
                            padding: '10px' // Add padding around the image
                        }}>
                            <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={image1} alt="Service" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Box>
    );
}