import { gql } from '../__generated__';

export const CHECK_SKU = gql(`
query CheckSku($sku: String!) {
  products(where: { sku: { _eq: $sku } }) {
    sku
    name
    price
    type
    attributes
  }
}`);
