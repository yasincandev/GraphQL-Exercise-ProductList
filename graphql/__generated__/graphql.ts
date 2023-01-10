/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  sku: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _append?: InputMaybe<Products_Append_Input>;
  _delete_at_path?: InputMaybe<Products_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Products_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Products_Delete_Key_Input>;
  _inc?: InputMaybe<Products_Inc_Input>;
  _prepend?: InputMaybe<Products_Prepend_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _append?: InputMaybe<Products_Append_Input>;
  _delete_at_path?: InputMaybe<Products_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Products_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Products_Delete_Key_Input>;
  _inc?: InputMaybe<Products_Inc_Input>;
  _prepend?: InputMaybe<Products_Prepend_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Products_ManyArgs = {
  updates: Array<Products_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  attributes?: Maybe<Scalars['jsonb']>;
  name?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  sku: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};


/** columns and relationships of "products" */
export type ProductsAttributesArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Products_Append_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  attributes?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  sku?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "sku" */
  ProductsPkey = 'products_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Products_Delete_At_Path_Input = {
  attributes?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Products_Delete_Elem_Input = {
  attributes?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Products_Delete_Key_Input = {
  attributes?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  price?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  attributes?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  sku?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  sku: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Products_Prepend_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Attributes = 'attributes',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Sku = 'sku',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  price?: Maybe<Scalars['Int']>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  Attributes = 'attributes',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Sku = 'sku',
  /** column name */
  Type = 'type'
}

export type Products_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Products_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Products_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Products_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Products_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Products_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Products_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  price?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  sku: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table in a streaming manner: "products" */
  products_stream: Array<Products>;
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  sku: Scalars['String'];
};


export type Subscription_RootProducts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

export type Insert_Products_OneMutationVariables = Exact<{
  object: Products_Insert_Input;
}>;


export type Insert_Products_OneMutation = { __typename?: 'mutation_root', insert_products_one?: { __typename?: 'products', sku: string, name?: string | null, price: number, type?: string | null, attributes?: any | null } | null };

export type DeleteProductsMutationVariables = Exact<{
  skus?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type DeleteProductsMutation = { __typename?: 'mutation_root', delete_products?: { __typename?: 'products_mutation_response', affected_rows: number } | null };

export type CheckSkuQueryVariables = Exact<{
  sku: Scalars['String'];
}>;


export type CheckSkuQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', sku: string, name?: string | null, price: number, type?: string | null, attributes?: any | null }> };

export type ProductQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', sku: string, name?: string | null, price: number, type?: string | null, attributes?: any | null }> };


export const Insert_Products_OneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insert_products_one"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"products_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_products_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"}}]}}]}}]} as unknown as DocumentNode<Insert_Products_OneMutation, Insert_Products_OneMutationVariables>;
export const DeleteProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skus"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sku"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skus"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<DeleteProductsMutation, DeleteProductsMutationVariables>;
export const CheckSkuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckSku"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sku"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sku"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sku"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"}}]}}]}}]} as unknown as DocumentNode<CheckSkuQuery, CheckSkuQueryVariables>;
export const ProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"}}]}}]}}]} as unknown as DocumentNode<ProductQuery, ProductQueryVariables>;