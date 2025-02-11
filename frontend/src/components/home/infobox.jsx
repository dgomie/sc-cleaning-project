import { Box, Button, useMediaQuery } from '@mui/material'


export default function InfoBox() {
    const isSmallScreen = useMediaQuery('(max-width:768px)')


    return (
        <>
            <Box sx={{ display: 'flex', flexDirection:'column', textAlign: 'center', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: isSmallScreen ? '20px' : '30px' }}>
                <p>
                    A clean home is a happy home. We go the extra mile to help make and keep your home clean.
                    One call is the easiest way to make your home shine. Let us help. Give us a call today.
                     {/* <br/>
                     <br/>
                <span style={{fontSize:'42px', fontWeight:'bold'}}>999-999-9999</span> */}
                </p>

            </Box>
            {/* <Button sx={{}}>
                Learn more
            </Button> */}

        </>
    )
}