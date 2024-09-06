import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public', 
  build: {
    rollupOptions: {
      input: './public/index.html',
    },
  },
});

