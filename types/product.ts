import { StaticImageData } from "next/image";

export interface ProductCardType {
  id: number;
  productName: string;
  productPrice: number;
  productDescription: string;
  productImage: StaticImageData;
}
