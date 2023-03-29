import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { AppTheme } from './config/theme/AppTheme';
import { store } from './store';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<AppTheme>
				<App />
			</AppTheme>
		</Provider>
	</React.StrictMode>
);
