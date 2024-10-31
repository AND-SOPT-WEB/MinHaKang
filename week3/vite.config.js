import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@constant': resolve(__dirname, './src/constant'),
      '@hook': resolve(__dirname, './src/hook'),
      '@page': resolve(__dirname, './src/page'),
      '@styles': resolve(__dirname, './src/styles'),
      '@util': resolve(__dirname, './src/util'),
      '@': resolve(__dirname, './src'),
    },
  },
});
