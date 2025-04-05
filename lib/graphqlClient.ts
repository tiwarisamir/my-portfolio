import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://gql.hashnode.com/", {
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
