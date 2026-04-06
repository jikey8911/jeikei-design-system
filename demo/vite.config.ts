import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname),
  publicDir: path.resolve(__dirname, '../public'),
  server: {
    port: 5173,
    open: true,
  },
  resolve: {
    alias: {
      '../src': path.resolve(__dirname, '../src'),
    },
  },
  build: {
    outDir: '../dist-demo',
    emptyOutDir: true,
  },
});
