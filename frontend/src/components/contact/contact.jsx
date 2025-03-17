import { Box, Typography, useMediaQuery } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    return(
       
        <Box sx={{ flexDirection: 'column', display: 'flex', marginTop:isSmallScreen ? '500px' : '0px'}}>
        <Typography sx={{ fontSize: '50px', alignItems: 'center', color: 'white', textAlign: isSmallScreen ? 'center' : 'left' }}>
            Contact Us
        </Typography>
        <Typography sx={{ fontSize: '18px', alignItems: 'center', color: 'white', textAlign: isSmallScreen ? 'center' : 'left', padding: isSmallScreen  ? '20px' : '0px'}}>
            Use any of our contact information below or fill out the form with any questions!
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px', justifyContent:isSmallScreen ? 'center' : 'none'}}>
            <PhoneIcon sx={{ color: 'white', marginRight: '10px' }} />
            <Typography sx={{ fontSize: '22px', color: 'white' }}>
                (123) 456-7890
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' ,  justifyContent:isSmallScreen ? 'center' : 'none'}}>
            <MailIcon sx={{ color: 'white', marginRight: '10px' }} />
            <Typography sx={{ fontSize: '22px', color: 'white' }}>
                info@example.com
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px',  justifyContent:isSmallScreen ? 'center' : 'none' }}>
            <LocationOnIcon sx={{ color: 'white', marginRight: '10px' }} />
            <Typography sx={{ fontSize: '22px', color: 'white' }}>
                123 Main St, Anytown, USA
            </Typography>
        </Box>
    </Box>
    )
}