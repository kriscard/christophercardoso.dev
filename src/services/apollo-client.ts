import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.GRAPH_CMS_CONTENT_API,
  cache: new InMemoryCache(),
});
