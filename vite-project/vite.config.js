import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  rollupOptions: {
    input: {
      main: './index.html',
      login: './src/login.html',
      productos: './src/productos.html',
      registro: './src/registro.html',
    },
  },
});

