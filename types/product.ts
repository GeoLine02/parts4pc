import { StaticImageData } from "next/image";

export interface ProductCardType {
  id: number;
  productName: string;
  productPrice: number;
  productDescription: string;
  productImage: StaticImageData;
}

export type ProductDetailsType = Omit<ProductCardType, "productImage"> & {
  productCategoryId: number;
  productOwnerId: number;
  productQuantity: number;
};
