import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { Suspense } from 'react';
import { NotificationProvider } from './providers';

function App() {
	return (
		<NotificationProvider>
			<BrowserRouter>
				<Suspense fallback={'Cargando...'}>
					<AppRouter />
				</Suspense>
			</BrowserRouter>
		</NotificationProvider>
	);
}

export default App;
