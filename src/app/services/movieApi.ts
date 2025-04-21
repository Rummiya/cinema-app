import { Movie } from '../types';
import { api } from './api';

export const movieApi = api.injectEndpoints({
	endpoints: builder => ({
		getAllMovies: builder.query<Movie[], void>({
			query: () => ({
				url: '/discover/movie',
				method: 'GET',
			}),
		}),
		getMovieById: builder.query<Movie, string>({
			query: id => ({
				url: `/movie/${id}`,
				method: 'GET',
			}),
		}),
	}),
});

export const {
	useGetAllMoviesQuery,
	useGetMovieByIdQuery,
	useLazyGetAllMoviesQuery,
	useLazyGetMovieByIdQuery,
} = movieApi;

export const {
	endpoints: { getAllMovies, getMovieById },
} = movieApi;
