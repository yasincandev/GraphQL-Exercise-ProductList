import { gql } from '../__generated__';

export const DELETE_PRODUCTS = gql(`
mutation DeleteProducts($skus: [String!]) {
  delete_products(where: { sku: { _in: $skus } }) {
    affected_rows
  }
}`);
