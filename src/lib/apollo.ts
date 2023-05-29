import { ApolloClient, InMemoryCache } from '@apollo/client/core/core.cjs';
import { PUBLIC_API_URL } from '$env/static/public';

const apolloClient = new ApolloClient({
	uri: PUBLIC_API_URL,
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

const query = async (q, variables = {}) => {
	try {
		return apolloClient.query({
			query: q,
			variables
		});
	} catch (error) {
		console.error(error);
	}
};

export default query;
