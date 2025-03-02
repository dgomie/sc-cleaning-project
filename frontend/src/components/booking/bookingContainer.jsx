import React from 'react';
import { Box } from '@mui/material';

export default function BookingContainer() {
  return (
    <Box>
      <iframe
        src="https://gomiescc.bookingkoala.com/booknow?embed=true"
        style={{ border: 'none', height: '1000px', overflow: 'hidden' }}
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
