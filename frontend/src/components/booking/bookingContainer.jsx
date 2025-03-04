import React from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function BookingContainer() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serviceId = queryParams.get('service_id');

  return (
    <Box sx={{ marginTop: '50px' }}>
      <iframe
        src={`https://gomiescc.bookingkoala.com/booknow?embed=true&service_id=${serviceId}`}
        style={{ border: 'none', height: '100vh', overflow: 'hidden' }}
        width="100%"
        seamless
      ></iframe>
      <script
        src="https://gomiescc.bookingkoala.com/resources/embed.js"
        defer
      ></script>
    </Box>
  );
}