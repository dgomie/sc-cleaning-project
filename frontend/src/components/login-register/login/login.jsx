import React from 'react';

export default function Login() {
  return (
    <div>
      <iframe
        src="https://gomiescc.bookingkoala.com/login?embed=true"
        style={{
          border: 'none',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}
        seamless
      ></iframe>
      <script
        src="https://gomiescc.bookingkoala.com/resources/embed.js"
        defer
      ></script>
    </div>
  );
}
