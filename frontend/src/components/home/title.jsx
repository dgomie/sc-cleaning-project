import { Box, useMediaQuery } from '@mui/material'

export default function Title() {
    const isSmallScreen = useMediaQuery('(max-width:900px)')


    return (
        <>
            <Box sx={{ fontSize: isSmallScreen ? '40px' : '70px' }}>
                Myrtle Beach
                <br />
                Cleaning
            </Box>
            <br />
            <Box sx={{ fontSize: isSmallScreen ? '10px' : '16px' }}>
                Possible Contact Box
                <br />
                <br />
                999-999-9999

            </Box>
        </>
    )
}