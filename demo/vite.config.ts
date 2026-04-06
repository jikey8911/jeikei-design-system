import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'jeikei-design-system/style.css': path.resolve(__dirname, '../dist/jeikei-design-system.css'),
    },
  },
});
