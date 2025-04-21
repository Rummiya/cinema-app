import { Link } from 'react-router-dom';
import { paths } from '../../../constants/paths';
import { Container } from '../Container';

export const Header = () => {
	return (
		<header>
			<Container>
				<h1 className='text-red-500'>logo</h1>
				<nav>
					<Link to={'/'}>Home</Link>
					<Link to={paths.FAVORITES}>Favorites</Link>
				</nav>
			</Container>
		</header>
	);
};
