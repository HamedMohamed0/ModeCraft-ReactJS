import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@fortawesome': path.resolve(__dirname, 'node_modules/@fortawesome'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(name ?? '')) {
            return 'fonts/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        },
      },
    },
  },
});
