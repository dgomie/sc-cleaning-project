import { Box, useMediaQuery } from '@mui/material';
import PhotoGrid from './photos';
import Logo from '../../assets/images/DSC_Logo_transparent_bg.png';

export default function Title() {
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  return (
    <>
      <Box sx={{ fontSize: isSmallScreen ? '50px' : '64px' }}>
        <img style={{ maxHeight: '30vh' }} src={Logo} alt={'logo'} />
      </Box>
      <br />
      <Box sx={{ fontSize: isSmallScreen ? '36px' : '42px' }}>
        {/* 999-999-9999 */}
      </Box>
      {/* {!isSmallScreen && (
                <Box sx={{ marginTop: '70px', fontSize: '20px' }}>
                    <p>Before & After</p>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                        <PhotoGrid />
                    </Box>
                </Box>
            )} */}
    </>
  );
}
