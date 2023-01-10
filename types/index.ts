export enum ProductType {
  DVD = 'DVD',
  BOOK = 'Book',
  FURNITURE = 'Furniture',
}

interface DVDAttributes {
  size: number | null;
}

interface BookAttributes {
  weight: number | null;
}

interface FurnitureAttributes {
  width: number | null;
  height: number | null;
  length: number | null;
}

export interface Product {
  sku: string;
  name: string;
  price: number | null;
  type: ProductType | null;
  attributes: DVDAttributes & BookAttributes & FurnitureAttributes;
}
