export interface Message {
  message: string;
}

export enum ProductType {
  TV = 1,
  Computer = 2,
  Phone = 3,
}

export interface IProduct {
  id: string;
  brandName: string;
  description: string;
  price: number;
  productType: ProductType;
  isInStock: boolean;
  image: string;
}
