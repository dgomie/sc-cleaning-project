import React from 'react';
import { InlineWidget } from 'react-calendly';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const VITE_CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

export default function SchedulePage() {
  const { param } = useParams();
  const calendlyUrl = `${VITE_CALENDLY_URL}/${param}`;

  return (
    <Box sx={{ paddingTop: '3.5rem', paddingX: '1.5rem', color: 'white' }}>
      <h1>Schedule</h1>
      <div className="App">
        <InlineWidget url={calendlyUrl} />
      </div>
    </Box>
  );
}