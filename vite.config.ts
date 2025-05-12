import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: 'src/nimbly-lite',
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'src/nimbly-lite/assets/js'),
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/nimbly-lite', 'main.tsx'),
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/nimbly-lite/components'),
    },
  },
  server: {
    open: true,
    port: 5173,
  },
}); 