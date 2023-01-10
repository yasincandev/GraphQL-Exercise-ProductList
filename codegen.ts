import { CodegenConfig } from '@graphql-codegen/cli';
import { ENDPOINT_URL } from './graphql/client';

const config: CodegenConfig = {
  schema: [
    {
      [ENDPOINT_URL]: {
        headers: {
          'x-hasura-admin-secret':
            '3AvjbB9PmsZ37AXsGNxe3ZKzql8dIjpLvzhphuCd3sYSc4j9Fq9jWS3Ltd4e5xM7',
        },
      },
    },
  ],
  documents: ['./graphql/**/*.query.ts', './graphql/**/*.mutation.ts'],
  generates: {
    './graphql/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
