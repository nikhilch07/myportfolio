import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set a base path if deploying to a subdirectory; update as necessary.
  // base: '/',
});