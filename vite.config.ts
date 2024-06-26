/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {

    watch: {
      usePolling: true,
    },
    host: true, // NOTE: needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3000,
  },
});
