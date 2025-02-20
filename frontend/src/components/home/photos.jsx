import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './photos.module.css'

import BeforeAfter1 from '../../assets/images/BeforeAfter1.jpg';
import BeforeAfter2 from '../../assets/images/BeforeAfter2.jpg';
import BeforeAfter3 from '../../assets/images/BeforeAfter3.jpg';
import BeforeAfter4 from '../../assets/images/BeforeAfter4.jpg';
import BeforeAfter5 from '../../assets/images/BeforeAfter5.jpg';
import BeforeAfter6 from '../../assets/images/BeforeAfter6.jpg';
import BeforeAfter7 from '../../assets/images/BeforeAfter7.jpg';
import BeforeAfter8 from '../../assets/images/BeforeAfter8.jpg';
import BeforeAfter9 from '../../assets/images/BeforeAfter9.jpg';
import BeforeAfter10 from '../../assets/images/BeforeAfter10.jpg';

const photos = [
    { image: BeforeAfter1 },
    { image: BeforeAfter2 },
    { image: BeforeAfter3 },
    { image: BeforeAfter4 },
    { image: BeforeAfter5 },
    { image: BeforeAfter6 },
    { image: BeforeAfter7 },
    { image: BeforeAfter8 },
    { image: BeforeAfter9 },
    { image: BeforeAfter10 },

];

export default function PhotoGrid() {
    const isSmallScreen = useMediaQuery('(max-width:900px)');

 

    return (
        <div style={{display:'flex', flexDirection:'column'}}>
        
            <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows className={styles.Carousel}>
                {photos.map((photo, index) => (
                    <Box
                        key={index}
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: isSmallScreen ? '50vh' : '50vh' }}
                    >
                        <Box
                            component="img"
                            src={photo.image}
                            
                        />
                    </Box>
                ))}
            </Carousel>
            <span style={{textAlign:'center', color:'white', fontSize:'32px', marginTop:'30px'}}>Before & After</span>
            </div>
    );
}