import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
require('dotenv').config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/graphql': {
        target: process.env.BACKEND_URL,
        changeOrigin: true,
        secure: false,
      },
      '/api': {
        target: process.env.BACKEND_URL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    build: {
      outDir: 'dist',
    },
  },
});
