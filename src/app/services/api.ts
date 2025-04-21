import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: process.env.API_URL,
	prepareHeaders: headers => {
		const apiKey = process.env.API_KEY;

		if (apiKey) {
			headers.set('authorization', `Bearer ${apiKey}`);
		}

		return headers;
	},
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
	reducerPath: 'splitApi',
	baseQuery: baseQueryWithRetry,
	refetchOnMountOrArgChange: true,
	endpoints: () => ({}),
});
