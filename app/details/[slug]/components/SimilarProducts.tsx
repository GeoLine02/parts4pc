"use client";

import ProductCard from "@/components/shared/ProductCard";
import Slider from "@/components/shared/Slider";
import MouseImage from "@/public/images/mouse.png";
import { ProductCardType } from "@/types/product";

interface SimilarProductsProps {
  similarProducts: ProductCardType[];
}

const SimilarProducts = ({ similarProducts }: SimilarProductsProps) => {
  return (
    <Slider
      sectionTitle="Similar Products"
      data={similarProducts}
      renderComponent={(data) => (
        <ProductCard
          id={data.id}
          productDescription={data.productDescription}
          productImage={MouseImage}
          productName={data.productName}
          productPrice={data.productPrice}
        />
      )}
    />
  );
};

export default SimilarProducts;
