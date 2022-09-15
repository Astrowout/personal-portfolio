import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { PUBLIC_API_URL } from '$env/static/public';

const apolloClient = new ApolloClient({
    uri: PUBLIC_API_URL,
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
        query: {
            fetchPolicy: 'no-cache',
        },
    },
});

const query = async (q) => {
    return apolloClient.query({
        query: q,
    })
}

export default query;