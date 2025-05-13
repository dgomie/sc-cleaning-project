import React, { useState } from 'react';
import ServiceBox from '../components/services/serviceBox';
import BeforeImage1 from '../assets/images/before1.png';
import AfterImage1 from '../assets/images/after1.png';
import BeforeImage2 from '../assets/images/before2.png';
import AfterImage2 from '../assets/images/after2.png';
import BeforeImage3 from '../assets/images/before3.png';
import AfterImage3 from '../assets/images/after3.png';

import { Dialog, DialogContent } from '@mui/material';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const servicesData = [
    {
        title: 'Basic Clean',
        description: 'Our basic clean package offers essential cleaning services like dusting, vacuuming, and sanitizing high-touch areas, ensuring your space is fresh and tidy. Perfect for regular maintenance or preparing for guests!',
        beforeImage: BeforeImage1,
        afterImage: AfterImage1
    },
    {
        title: 'Deep Clean',
        description: 'A deep clean focuses on a thorough cleaning of your space, covering detailed tasks like sanitizing light fixtures and dusting ceiling fans while tackling dust in hard-to-reach spots. It\'s great for seasonal refreshes or after events, making sure everything is spotless and revitalized.',
        beforeImage: BeforeImage2,
        afterImage: AfterImage2
    },
    {
        title: 'Move In / Out',
        description: 'Move-in/out cleaning is an essential step in transitioning between homes. It includes deep cleaning tasks such as scrubbing floors, sanitizing bathrooms, and wiping down surfaces, making it easier for everyone involved to settle in or hand over the keys with peace of mind.',
        beforeImage: BeforeImage3,
        afterImage: AfterImage3
    },
    // Add more services as needed
];

export default function ServicePage() {
    const [open, setOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handleClickOpen = (photo) => {
        setSelectedPhoto(photo);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedPhoto(null);
    };

    return (
        <div style={{ marginTop: '100px' }}>
            {servicesData.map((service, index) => (
                <ServiceBox
                    key={index}
                    title={service.title}
                    description={service.description}
                    beforeImage={service.beforeImage}
                    afterImage={service.afterImage}
                    onClick={() => handleClickOpen({ before: service.beforeImage, after: service.afterImage })}
                />
            ))}
            <Dialog open={open} onClose={handleClose} maxWidth="lg">
                <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {selectedPhoto && (
                        <ImgComparisonSlider>
                            <img slot="first" src={selectedPhoto.before} alt="Before" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            <img slot="second" src={selectedPhoto.after} alt="After" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </ImgComparisonSlider>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}