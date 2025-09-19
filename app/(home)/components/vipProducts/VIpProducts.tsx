"use client";

import ProductCard from "@/components/shared/ProductCard";
import Slider from "@/components/shared/Slider";
import { ProductCardType } from "@/types/product";

interface VipProductsProps {
  vipProductsData: ProductCardType[];
}

const VIpProducts = ({ vipProductsData }: VipProductsProps) => {
  return (
    <Slider
      sectionTitle="VIP Products"
      data={vipProductsData}
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
