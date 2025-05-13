import { Box, useMediaQuery } from '@mui/material';
import Logo from '../../assets/images/DSC_Logo_transparent_bg.png'

export default function Title() {
  const isSmallScreen = useMediaQuery('(max-width:768px)');
   const isMediumScreen = useMediaQuery('(max-width:1200px)');

  return (
    <>
      <Box sx={{ fontSize: isSmallScreen ? '50px' : '72px', textAlign: isMediumScreen || isSmallScreen ? 'center' : 'left', alignItems:'flex-start'}}>
        <span style={{fontWeight:'bold', textAlign:'inherit'}}>Devleigh's 
          <br/> Squeaky Clean</span>
          {/* <img style={{height:isSmallScreen? '200px' : '350px' }}src={Logo} alt='Logo'></img> */}
      </Box>
      <br />
   
     
    </>
  );
}
