import os from 'os';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

function getLocalIPAddress() {
	const nets = os.networkInterfaces();
	for (const name of Object.keys(nets)) {
		for (const net of nets[name] || []) {
			if (net.family === 'IPv4' && !net.internal) {
				return net.address;
			}
		}
	}
	return undefined;
}

const REMOTE_HOST = process.env.REMOTE_HOST || getLocalIPAddress() || 'localhost';

export default defineConfig(({ mode }) => {
	const remoteEntryPath =
		mode === 'production'
			? `https://oratechies.netlify.app/auth-mfe/assets/remoteEntry.js`
			: `http://${REMOTE_HOST}:5001/remoteEntry.js`;

	const adminRemoteEntryPath =
		mode === 'production'
			? `https://oratechies.netlify.app/admin-mfe/assets/remoteEntry.js`
			: `http://${REMOTE_HOST}:5002/remoteEntry.js`;

	return {
		plugins: [
			react(),
			federation({
				name: 'host_app',
				remotes: {
					auth_mfe: remoteEntryPath,
					adminMfe: adminRemoteEntryPath,
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
	};
});
