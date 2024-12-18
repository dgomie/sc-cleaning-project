import React, { useState, useRef } from 'react'
import Title from '../components/home/title'
import InfoBox from '../components/home/infobox'
import Packages from '../components/home/packages'
import { Box, Button, useMediaQuery } from '@mui/material'
import Photo1 from '../assets/images/SCC background.jpg'

export default function HomePage() {
    const isSmallScreen = useMediaQuery('(max-width:900px)')
    const [showPackages, setShowPackages] = useState(false)
    const packagesRef = useRef(null)
    const topRef = useRef(null)

    const handleShowPackages = () => {
        if (!showPackages) {
            setShowPackages(true)
        }
        setTimeout(() => {
            if (isSmallScreen) {
                packagesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
            } else {
                packagesRef.current.scrollIntoView({ behavior: 'smooth' })
            }
        }, 100)
    }

    const handleBackToHome = () => {
        topRef.current.scrollIntoView({ behavior: 'smooth' })
        setTimeout(() => {
            setShowPackages(false)
        }, 700) // Adjust the timeout duration to match the scroll duration
    }

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
                        <Box sx={{ textAlign: 'center', marginTop: isSmallScreen ? '20px' : '250px', width: isSmallScreen ? '270px' : '400px' }}>
                            <InfoBox />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <Button sx={{ color: 'primary.main', backgroundColor: 'white' }} onClick={handleShowPackages}>
                        View Packages
                    </Button>
                </Box>
            </Box>
            {showPackages && (
                <Box
                    ref={packagesRef}
                    sx={{
                        height: isSmallScreen ? 'auto' : '100vh',
                        minHeight: isSmallScreen ? '100vh' : 'auto',
                        backgroundImage: `url(${Photo1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',

                    }}
                >
                    <Packages sx={{}} />
                    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                        <Button sx={{ color: 'primary.main', backgroundColor: 'white' }} onClick={handleBackToHome}>
                            Close Packages
                        </Button>
                    </Box>
                </Box>
            )}
        </>
    )
}