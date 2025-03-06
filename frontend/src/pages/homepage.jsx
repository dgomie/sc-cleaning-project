import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Title from '../components/home/title';
import InfoBox from '../components/home/infobox';
import Packages from '../components/home/packages';
import { Box, Button, useMediaQuery } from '@mui/material';
import Photo1 from '../assets/images/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-80068.jpg'
import PhotoGrid from '../components/home/photos';

export default function HomePage() {
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    const customIsSmallScreen = useMediaQuery('(max-width:768px)');
    const isMediumScreen = useMediaQuery('(max-width:1200px)');
    const location = useLocation();
    const packagesRef = useRef(null);
    const topRef = useRef(null);

    const handleShowPackages = () => {
        console.log('called package');
        setTimeout(() => {
            if (isSmallScreen) {
                packagesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                packagesRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    useEffect(() => {
        if (location.state?.scrollToPackages) {
            handleShowPackages();
        }
    }, [location.state]);

    return (
        <>
            <Box ref={topRef} sx={{ height: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: isMediumScreen ? 'center' : 'flex-start', justifyContent: 'center', width: '50%', paddingLeft: isMediumScreen ? '0px' : '200px' }}>
                    <Box sx={{ textAlign: isMediumScreen ? 'center' : 'left', marginTop: isSmallScreen ? '40px' : '0px', color: 'white' }}>
                        <Title />
                    </Box>
                    <Box sx={{ textAlign: isMediumScreen ? 'center' : 'left', marginTop: customIsSmallScreen ? '20px' : '-20px', width: customIsSmallScreen ? '270px' : '400px', display: 'flex', flexDirection: 'column', alignItems: isMediumScreen ? 'center' : 'flex-start' }}>
                        <InfoBox />
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                            <Button sx={{ color: 'primary.main', backgroundColor: 'white', width: customIsSmallScreen ? '100px' : '150px', height: customIsSmallScreen ? '30px' : '40px', fontSize: customIsSmallScreen ? '10px' : '12px' }} onClick={handleShowPackages}>
                                View Packages
                            </Button>
                            <Button sx={{ color: 'primary.main', backgroundColor: 'white', width: customIsSmallScreen ? '100px' : '150px', height: customIsSmallScreen ? '30px' : '40px', fontSize: customIsSmallScreen ? '10px' : '12px' }}>
                                Learn more
                            </Button>
                        </div>
                    </Box>
                </Box>
                {!isMediumScreen && (
                    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: '500px' }}>
                            {/* <PhotoGrid /> */}
                        </Box>
                    </Box>
                )}
            </Box>

            <Box
                ref={packagesRef}
                sx={{
                    height: isMediumScreen ? 'auto' : '100vh',
                    minHeight: isMediumScreen ? '100vh' : 'auto',
                    backgroundColor: 'rgb(0,0,0,0.1)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '20px',
                    backdropFilter: 'blur(10px)'
                }}
            >
                <Packages sx={{}} />
            </Box>
        </>
    );
}