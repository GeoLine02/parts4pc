"use client";

import ProductCard from "@/components/shared/ProductCard";
import Slider from "@/components/shared/Slider";
import { ProductCardType } from "@/types/product";
import { products } from "../../data/products";

const VIpProducts = () => {
  return (
    <section className="space-y-4 container flex flex-col gap-4">
      <h1 className="text-2xl font-medium text-warmGray">VIP Products</h1>
      <div>
        <Slider
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
      </div>

      {/* <div className="flex gap-4">
        <ProductCard
          id={1}
          productName="Product Name"
          productPrice={150.0}
          productImage={MouseImage}
          productDescription="High-precision RGB wired gaming mouse with customizable buttons."
        />
        <ProductCard
          id={1}
          productName="Product Name"
          productPrice={150.0}
          productImage={MouseImage}
          productDescription="High-precision RGB wired gaming mouse with customizable buttons."
        />
        <ProductCard
          id={1}
          productName="Product Name"
          productPrice={150.0}
          productImage={MouseImage}
          productDescription="High-precision RGB wired gaming mouse with customizable buttons."
        />
        <ProductCard
          id={1}
          productName="Product Name"
          productPrice={150.0}
          productImage={MouseImage}
          productDescription="High-precision RGB wired gaming mouse with customizable buttons."
        />
        <ProductCard
          id={1}
          productName="Product Name"
          productPrice={150.0}
          productImage={MouseImage}
          productDescription="High-precision RGB wired gaming mouse with customizable buttons."
        />
      </div> */}
    </section>
  );
};

export default VIpProducts;
