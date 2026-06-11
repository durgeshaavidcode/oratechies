import React from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './store';

export default function Admin() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}