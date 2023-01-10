import { gql } from '../__generated__';

export const GET_PRODUCTS = gql(`
query Product {
  products {
    sku
    name
    price
    type
    attributes
  }
}`);
