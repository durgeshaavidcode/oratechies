import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Box, CssBaseline } from '@mui/material';
import { store } from './store';
import AppRouter from './routes/Router';

const root = ReactDOM.createRoot(document.getElementById('_oratechies-root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<CssBaseline />
			<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
				<AppRouter />
			</Box>
		</Provider>
	</React.StrictMode>,
);
