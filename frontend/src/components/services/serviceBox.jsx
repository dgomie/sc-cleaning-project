import { Box, Typography } from "@mui/material";
import { ImgComparisonSlider } from '@img-comparison-slider/react'; // Make sure to install this package

export default function ServiceBox({ title, description, beforeImage, afterImage }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <Box sx={{
                width: '96vw',
                height: 'auto',
                textAlign: 'center',
                backgroundColor: 'rgb(90, 134, 163)',
                '@media (max-width: 1200px)': {
                    height: 'auto',
                    padding: '20px'
                }
            }}>
                <Box sx={{
                    backgroundColor: 'rgb(90, 134, 163)',
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '50px',
                    '@media (max-width: 1200px)': {
                        flexDirection: 'column',
                        padding: '20px'
                    }
                }}>
                    <Typography sx={{
                        color: 'black',
                        textAlign: 'center',
                        marginRight: '200px',
                        fontSize: '24px',
                        maxWidth: '900px',
                        '@media (max-width: 1200px)': {
                            marginRight: '0px',
                            fontSize: '20px'
                        }
                    }}>
                        {title}
                    </Typography>
                    <Typography sx={{
                        color: 'black',
                        textAlign: 'center',
                        marginRight: '200px',
                        fontSize: '18px',
                        maxWidth: '900px',
                        '@media (max-width: 1200px)': {
                            marginRight: '0px',
                            fontSize: '16px'
                        }
                    }}>
                        {description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <ImgComparisonSlider>
                            <img slot="first" src={beforeImage} alt={`${title} - Before`} style={{ width: '200px', height: '200px', marginBottom: '10px', '@media (max-width: 1200px)': { width: '150px', height: '150px' } }} />
                            <img slot="second" src={afterImage} alt={`${title} - After`} style={{ width: '200px', height: '200px', '@media (max-width: 1200px)': { width: '150px', height: '150px' } }} />
                        </ImgComparisonSlider>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}