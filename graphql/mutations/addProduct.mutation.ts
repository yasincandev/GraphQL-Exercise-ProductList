import { gql } from '../__generated__';

export const ADD_PRODUCT = gql(`
  mutation insert_products_one($object: products_insert_input!) {
    insert_products_one(object: $object) {
      sku
      name
      price
      type
      attributes  

    }
  }
`);
