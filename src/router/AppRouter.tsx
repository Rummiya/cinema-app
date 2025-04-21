import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../app/components/layout/Layout';
import { paths } from '../constants/paths';
import { Favorites } from '../pages/Favorites';
import { Home } from '../pages/Home';

export const AppRouter = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '',
					element: <Home />,
				},
				{
					path: paths.FAVORITES,
					element: <Favorites />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};
