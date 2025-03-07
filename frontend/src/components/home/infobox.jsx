import { Box, useMediaQuery } from '@mui/material';

export default function InfoBox() {
    const isSmallScreen = useMediaQuery('(max-width:768px)');
     const isMediumScreen = useMediaQuery('(max-width:1200px)');

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: isMediumScreen ? 'center' : 'left', alignItems: 'flex-start', justifyContent: 'center', color: 'white', fontSize: isMediumScreen ? '20px' : '28px', width: isMediumScreen ? '270px' : '700px', }}>
                <p>
                    A clean home is a happy home. We go the extra mile to help make and keep your home clean.
                    One call is the easiest way to make your home shine. Let us help. Give us a call today.
                    <br />
                    <br />
                    <span style={{ fontSize: isSmallScreen ? 
                        '36px' : '52px', fontWeight: 'bold' }}>999-999-9999</span>
                </p>
            </Box>
        </>
    );
}