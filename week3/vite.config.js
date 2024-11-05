import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@common': resolve(__dirname, './src/components/common'),
      '@constant': resolve(__dirname, './src/constant'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@page': resolve(__dirname, './src/page'),
      '@styles': resolve(__dirname, './src/styles'),
      '@utils': resolve(__dirname, './src/utils'),
      '@': resolve(__dirname, './src'),
    },
  },
});
