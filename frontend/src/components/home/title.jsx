import { Box, useMediaQuery } from '@mui/material'
import PhotoGrid from './photos'

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



                999-999-9999

            </Box>
            {!isSmallScreen && (
                <Box sx={{ marginTop: '70px', fontSize: '20px' }}>
                    <p>Before & After</p>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                        <PhotoGrid />
                    </Box>
                </Box>
            )}

        </>
    )
}