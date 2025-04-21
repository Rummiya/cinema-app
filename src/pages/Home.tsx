import { useEffect } from 'react';

export const Home = () => {
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODMwMTgzNGY1YjRkOTY2ZDliMTVmYTA2NGFlZjVjNCIsIm5iZiI6MTc0NTE0MTI1Ny4xMzEsInN1YiI6IjY4MDRiZTA5ZTNmYWMyZjkwMjg5ZDAyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FzuzpurIRInumn1R70eZo-e1HbSP7NycF7kT982_BzI',
			},
		};

		fetch('https://api.themoviedb.org/3/movie/1197306', options)
			.then(res => res.json())
			.then(res => console.log(res))
			.catch(err => console.error(err));
	}, []);

	return <div>Home</div>;
};
