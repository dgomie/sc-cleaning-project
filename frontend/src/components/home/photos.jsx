import React, { useState } from 'react'
import { Box, Dialog, DialogContent, useMediaQuery } from '@mui/material'
import { ImgComparisonSlider } from '@img-comparison-slider/react'
import Photo1 from '../../assets/images/SCC background.jpg'
import Photo2 from '../../assets/images/SCC background2.jpg'

const photos = [
    { before: Photo1, after: Photo2 },
]

export default function PhotoGrid() {
    const isSmallScreen = useMediaQuery('(max-width:900px)')

    const [open, setOpen] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState(null)

    const handleClickOpen = (photo) => {
        setSelectedPhoto(photo)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setSelectedPhoto(null)
    }

    return (
        <>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: isSmallScreen ? '220px' : '420px' }}>
                {photos.map((photo, index) => (
                    <Box
                        component="img"
                        src={photo.before}
                        key={index}
                        sx={{ width: isSmallScreen ? 50 : 100, height: isSmallScreen ? 50 : 100, border: '2px white solid', cursor: 'pointer' }}
                        onClick={() => handleClickOpen(photo)}
                    />
                ))}
            </Box>
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
        </>
    )
}