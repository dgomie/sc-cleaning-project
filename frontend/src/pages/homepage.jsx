import React, { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Title from '../components/home/title'
import InfoBox from '../components/home/infobox'
import Packages from '../components/home/packages'
import { Box, Button, useMediaQuery } from '@mui/material'
import Photo1 from '../assets/images/SCC background.jpg'
import PhotoGrid from '../components/home/photos';

export default function HomePage() {
    const isSmallScreen = useMediaQuery('(max-width:900px)')
    const customIsSmallScreen= useMediaQuery('(max-width:768px)')
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
           
           <Box ref={topRef} sx={{ height: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
                    <Box sx={{ textAlign: 'center', marginTop: isSmallScreen ? '0px' : '0px', color: 'white' }}>
                        <Title />
                    </Box>
                    <Box sx={{ textAlign: 'center', marginTop: customIsSmallScreen ? '20px' : '20px', width: customIsSmallScreen ? '270px' : '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <InfoBox />
                        <Button sx={{ color: 'primary.main', backgroundColor: 'white', width: customIsSmallScreen ? '100px' :'200px', height: customIsSmallScreen? '30px' : '50px', fontSize: customIsSmallScreen? '10px' : '16px' }} onClick={handleShowPackages}>
                            View Packages
                        </Button>
                    </Box>
                </Box>
                {!isMediumScreen && (
                    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
                        <Box sx={{ marginBottom: '70px', fontSize: '20px' }}>
                            <p>Before & After</p>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <PhotoGrid />
                            </Box>
                        </Box>
                    </Box>
                )}
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