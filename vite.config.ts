import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages deploys under /<repo-name>/
  base: '/MedCanna-Competencies/',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  // No process.env.API_KEY – keys are entered at runtime via Settings
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  build: {
    target: 'es2022',
    sourcemap: false,
    // Increase chunk warning limit (Tailwind CDN handles CSS; JS is content-heavy)
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          charts: ['recharts'],
        }
      }
    }
  }
});
