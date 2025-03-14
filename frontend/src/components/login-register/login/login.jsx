import React from 'react';

export default function Login() {
  const baseUrl = import.meta.env.VITE_BOOKING_BASE_URL;

  return (
    <div>
      <iframe
        src={`${baseUrl}/login?embed=true`}
        style={{
          border: 'none',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}
        seamless
      ></iframe>
      <script
        src={`${baseUrl}/resources/embed.js`}
        defer
      ></script>
    </div>
  );
}