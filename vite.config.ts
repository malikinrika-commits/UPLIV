import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base : '/UPLIV/',
    
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        '/api': 'http://localhost:4001',
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
  };
});
