import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: false,
            merge(
              existing = { __typename: "Characters", results: [], info: {} },
              incoming,
              { args }
            ) {
              if (args && !args.page) {
                return incoming;
              }
              return {
                ...existing,
                results: [...existing?.results, ...incoming?.results],
                info: { ...existing?.info, ...incoming?.info },
              };
            },
          },
        },
      },
    },
  }),
});

export default client;
