import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HASHNODE_URI } from "./constant";

const client = new ApolloClient({
  uri: HASHNODE_URI,
  cache: new InMemoryCache(),
});

export default client;
