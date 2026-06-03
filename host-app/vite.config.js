import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

const REMOTE_HOST = process.env.REMOTE_HOST || 'localhost';

export default defineConfig({
	plugins: [
		react(),
		federation({
			name: 'host_app',
			remotes: {
				auth_mfe: `http://${REMOTE_HOST}:5001/remoteEntry.js`,
				adminMfe: `http://${REMOTE_HOST}:5002/remoteEntry.js`,
			},
			shared: ['react', 'react-dom', 'react-router-dom'],
		}),
		{
			name: 'force-cors',
			configureServer(server) {
				server.middlewares.use((_req, res, next) => {
					res.setHeader('Access-Control-Allow-Origin', '*');
					res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
					res.setHeader(
						'Access-Control-Allow-Headers',
						'Origin, X-Requested-With, Content-Type, Accept',
					);
					next();
				});
			},
			configurePreviewServer(server) {
				server.middlewares.use((_req, res, next) => {
					res.setHeader('Access-Control-Allow-Origin', '*');
					res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
					res.setHeader(
						'Access-Control-Allow-Headers',
						'Origin, X-Requested-With, Content-Type, Accept',
					);
					next();
				});
			},
		},
	],
	optimizeDeps: {
		// exclude: ['authMfe', 'adminMfe']
	},
	server: {
		port: 5000,
		strictPort: true,
		host: true,
		cors: true, // Allow micro-frontends to bypass cross-origin blocks
	},
	build: {
		target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    	cssTarget: 'safari14',
		minify: false,
		modulePreload: false,
	},
});
