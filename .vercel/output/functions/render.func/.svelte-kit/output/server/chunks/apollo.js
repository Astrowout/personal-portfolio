import { ApolloClient, InMemoryCache } from "@apollo/client/core/core.cjs";
const PUBLIC_API_URL = "https://api-eu-central-1.hygraph.com/v2/cl7xpa27c324f01ughw839w8s/master";
const apolloClient = new ApolloClient({
  uri: PUBLIC_API_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network"
    },
    query: {
      fetchPolicy: "no-cache"
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
export {
  query as q
};
