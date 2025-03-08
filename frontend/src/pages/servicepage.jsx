import React, { useState } from 'react';
import ServiceBox from '../components/services/serviceBox';
import BeforeImage1 from '../assets/images/BeforeAfter1.jpg';
import AfterImage1 from '../assets/images/BeforeAfter2.jpg';
import BeforeImage2 from '../assets/images/BeforeAfter3.jpg';
import AfterImage2 from '../assets/images/BeforeAfter4.jpg';
import { Dialog, DialogContent } from '@mui/material';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const servicesData = [
    {
        title: 'Basic Clean',
        description: 'Our Basic Clean service is designed to keep your home looking fresh and tidy. This service includes dusting all surfaces, vacuuming carpets and rugs, mopping hard floors, and general tidying up of all rooms. We also clean windows, remove trash, ',
        beforeImage: BeforeImage1,
        afterImage: AfterImage1
    },
    {
        title: 'Deep Clean',
        description: 'Our Deep Clean service goes beyond the basics to tackle the hard-to-reach areas and stubborn dirt that accumulates over time. This comprehensive cleaning includes scrubbing bathrooms, cleaning kitchens, and addressing hard-to-reach areas such as baseboards and light fixtures. We also provide carpet cleaning and ensure that every nook and',
        beforeImage: BeforeImage2,
        afterImage: AfterImage2
    },
    {
        title: 'Move In / Out',
        description: 'Our Move In / Out service is designed to make your transition to a new home as smooth as possible. We provide a deep clean of all rooms, ensuring that every surface is spotless and ready for you to move in or out. This service includes cleaning appliances, fixtures, cabinets, closets, and even the garage. We ensure that your new.',
        beforeImage: BeforeImage2,
        afterImage: AfterImage2
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