import Title from '../components/home/title'
import InfoBox from '../components/home/infobox'
import { Box, Button, useMediaQuery } from '@mui/material'


export default function HomePage() {
    const isSmallScreen = useMediaQuery('(max-width:900px)')



    return (
        <>
            <Box sx={{ height: '75vh', display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row' }}>
                <Box sx={{ width: isSmallScreen ? '100%' : '50%' }}>
                    <Box sx={{ textAlign: 'center', marginTop: isSmallScreen ? '80px' : '150px', color: 'white' }}>
                        <Title />
                    </Box>
                </Box>
                <Box sx={{ width: isSmallScreen ? '100%' : '40%', display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ textAlign: 'center', marginTop: isSmallScreen ? '20px' : '250px', width: isSmallScreen ? '270px' : '400px' }}>
                        <InfoBox />
                    </Box>
                </Box>

            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button sx={{ color: 'primary.main', backgroundColor: 'white' }}>
                    View Packages
                </Button>
            </Box>
        </>
    )
}