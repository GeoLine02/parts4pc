"use client";

import ProductCard from "@/components/shared/ProductCard";
import Slider from "@/components/shared/Slider";
import { ProductCardType } from "@/types/product";
import { products } from "../../data/products";

const VIpProducts = () => {
  return (
    <Slider
      sectionTitle="VIP Products"
      data={products}
      renderComponent={(data: ProductCardType) => (
        <ProductCard
          id={data.id}
          productDescription={data.productDescription}
          productImage={data.productImage}
          productName={data.productName}
          productPrice={data.productPrice}
        />
      )}
    />
  );
};

export default VIpProducts;
