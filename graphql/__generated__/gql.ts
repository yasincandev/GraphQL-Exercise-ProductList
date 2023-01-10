/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation insert_products_one($object: products_insert_input!) {\n    insert_products_one(object: $object) {\n      sku\n      name\n      price\n      type\n      attributes  \n\n    }\n  }\n": types.Insert_Products_OneDocument,
    "\nmutation DeleteProducts($skus: [String!]) {\n  delete_products(where: { sku: { _in: $skus } }) {\n    affected_rows\n  }\n}": types.DeleteProductsDocument,
    "\nquery CheckSku($sku: String!) {\n  products(where: { sku: { _eq: $sku } }) {\n    sku\n    name\n    price\n    type\n    attributes\n  }\n}": types.CheckSkuDocument,
    "\nquery Product {\n  products {\n    sku\n    name\n    price\n    type\n    attributes\n  }\n}": types.ProductDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation insert_products_one($object: products_insert_input!) {\n    insert_products_one(object: $object) {\n      sku\n      name\n      price\n      type\n      attributes  \n\n    }\n  }\n"): (typeof documents)["\n  mutation insert_products_one($object: products_insert_input!) {\n    insert_products_one(object: $object) {\n      sku\n      name\n      price\n      type\n      attributes  \n\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation DeleteProducts($skus: [String!]) {\n  delete_products(where: { sku: { _in: $skus } }) {\n    affected_rows\n  }\n}"): (typeof documents)["\nmutation DeleteProducts($skus: [String!]) {\n  delete_products(where: { sku: { _in: $skus } }) {\n    affected_rows\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery CheckSku($sku: String!) {\n  products(where: { sku: { _eq: $sku } }) {\n    sku\n    name\n    price\n    type\n    attributes\n  }\n}"): (typeof documents)["\nquery CheckSku($sku: String!) {\n  products(where: { sku: { _eq: $sku } }) {\n    sku\n    name\n    price\n    type\n    attributes\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Product {\n  products {\n    sku\n    name\n    price\n    type\n    attributes\n  }\n}"): (typeof documents)["\nquery Product {\n  products {\n    sku\n    name\n    price\n    type\n    attributes\n  }\n}"];

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;