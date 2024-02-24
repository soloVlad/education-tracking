import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

const __dirname = import.meta.dirname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@scss': path.resolve(__dirname, './src/scss'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
})
