import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = () => {
	return (
		<div className='flex flex-col justify-between min-h-screen w-full'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};
