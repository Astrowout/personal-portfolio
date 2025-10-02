import apollo from '@apollo/client/core/core.cjs';
import { PUBLIC_API_URL } from '$env/static/public';

const { ApolloClient, InMemoryCache, HttpLink, gql } = apollo;

export { gql };

const apolloClient = new ApolloClient({
	link: new HttpLink({
		uri: PUBLIC_API_URL,
		fetch,
	}),
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'cache-and-network'
		},
		query: {
			fetchPolicy: 'no-cache'
		}
	}
});

interface QueryResponse {
	page: any;
}

const query = async (q, variables = {}) => {
	try {
		return apolloClient.query<QueryResponse>({
			query: q,
			variables
		});
	} catch (error) {
		console.error(error);
	}
};

export default query;
