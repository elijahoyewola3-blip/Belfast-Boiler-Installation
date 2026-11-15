import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          'boiler-installations': path.resolve(__dirname, 'boiler-installations.html'),
          'boiler-servicing': path.resolve(__dirname, 'boiler-servicing.html'),
          'convert-to-gas': path.resolve(__dirname, 'convert-to-gas.html'),
          'commercial-boilers': path.resolve(__dirname, 'commercial-boilers.html'),
          'smart-heating-controls': path.resolve(__dirname, 'smart-heating-controls.html'),
          about: path.resolve(__dirname, 'about.html'),
          reviews: path.resolve(__dirname, 'reviews.html'),
          contact: path.resolve(__dirname, 'contact.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
