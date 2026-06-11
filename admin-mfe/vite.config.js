import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'admin_mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './Admin': './src/Admin.jsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 5002,
    strictPort: true,
    host: true,
    cors: true
  },
  preview: {
    host: true,
    port: 5002,
    strictPort: true,
    cors: true
  },
  build: {
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    cssTarget: 'safari14',
    minify: false,
    modulePreload: false,
  }
});