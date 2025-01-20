import React, { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Title from '../components/home/title'
import InfoBox from '../components/home/infobox'
import Packages from '../components/home/packages'
import { Box, Button, useMediaQuery } from '@mui/material'
import Photo1 from '../assets/images/SCC background.jpg'

export default function HomePage() {
    const isSmallScreen = useMediaQuery('(max-width:900px)')
    const isMediumScreen = useMediaQuery('(max-width:1200px)')
    const location = useLocation();
    const packagesRef = useRef(null)
    const topRef = useRef(null)

    const handleShowPackages = () => {
        console.log('called package')
       
        setTimeout(() => {
            if (isSmallScreen) {
                packagesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
            } else {
                packagesRef.current.scrollIntoView({ behavior: 'smooth' })
            }
        }, 100)
    }


    useEffect(() => {
        if (location.state?.scrollToPackages) {
          handleShowPackages();
        }
      }, [location.state]);

    return (
        <>
            <Box ref={topRef} sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row' }}>
                    <Box sx={{ width: isSmallScreen ? '100%' : '50%' }}>
                        <Box sx={{ textAlign: 'center', marginTop: isSmallScreen ? '80px' : '150px', color: 'white' }}>
                            <Title />
                        </Box>
                    </Box>
                    <Box sx={{ width: isSmallScreen ? '100%' : '35%', display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ textAlign: 'center', marginTop: isSmallScreen ? '20px' : '250px', width: isSmallScreen ? '270px' : '400px', display: 'flex', flexDirection:'column', alignItems:'center' }}>
                            <InfoBox />
                            <Button sx={{ color: 'primary.main', backgroundColor: 'white', width:'150px' }} onClick={handleShowPackages}>
                        View Packages
                    </Button>
                        </Box>
                        
                    </Box>
                </Box>
            
            </Box>
          
                <Box
                    ref={packagesRef}
                    sx={{
                        height: isMediumScreen ? 'auto' : '100vh',
                        minHeight: isMediumScreen ? '100vh' : 'auto',
                        backgroundImage: `url(${Photo1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '20px'

                    }}
                >
                    <Packages sx={{}} />
                 
                </Box>
           
        </>
    )
}