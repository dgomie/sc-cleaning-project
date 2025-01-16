import { Box, Button, useMediaQuery } from '@mui/material'


export default function InfoBox() {
    const isSmallScreen = useMediaQuery('(max-width:900px)')


    return (
        <>
            <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: isSmallScreen ? '20px' : '30px' }}>
                <p>hello this is info box, this is information about us, and what we do. This is something we like to do and here is information about us, if u want to learn more click the button below.</p>
            </Box>
            {/* <Button sx={{}}>
                Learn more
            </Button> */}

        </>
    )
}