import { ApolloClient, InMemoryCache } from '@apollo/client';

export const ENDPOINT_URL = 'https://scandiweb-task.hasura.app/v1/graphql';

export const client = new ApolloClient({
  uri: ENDPOINT_URL,
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': process.env
      .NEXT_PUBLIC_HASURA_ADMIN_SECRET as string,
  },
});
