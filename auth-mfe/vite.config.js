import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'auth_mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './Auth': './src/Auth.jsx',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.2.6' },
        'react-dom': { singleton: true, requiredVersion: '^19.2.6' },
        'react-router-dom': { singleton: true, requiredVersion: '^6.26.0' },
      },
    }),
  ],
  server: {
    host: true,
    port: 5001,
    strictPort: true,
    cors: true // Allow host-app to bypass cross-origin blocks
  },
  preview: {
    host: true,
    port: 5001,
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