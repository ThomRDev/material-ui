import { Routes, Route } from 'react-router-dom';
import { RouterLayout } from '../shared/RouterLayout';
import { CharacterPage, HomePage, LoginPage } from '../page';
export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<RouterLayout />}>
				<Route path='/' element={<HomePage />} />
				<Route path='/character/:id' element={<CharacterPage />} />
			</Route>
			<Route path='/login' element={<LoginPage />} />
		</Routes>
	);
};
