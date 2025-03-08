import { Box, useMediaQuery } from '@mui/material';

export default function Title() {
  const isSmallScreen = useMediaQuery('(max-width:768px)');
   const isMediumScreen = useMediaQuery('(max-width:1200px)');

  return (
    <>
      <Box sx={{ fontSize: isSmallScreen ? '50px' : '72px', textAlign: isMediumScreen ? 'center' : 'left', alignItems:'flex-start'}}>
        <span style={{fontWeight:'bold', textAlign:'left'}}>Devleigh's 
          <br/> Squeaky Clean</span>
      </Box>
      <br />
   
     
    </>
  );
}
