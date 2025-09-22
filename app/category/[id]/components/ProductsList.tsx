"use client";

import ProductCard from "@/components/shared/ProductCard";
import { ProductCardType } from "@/types/product";
import MouseImage from "@/public/images/mouse.png";
import { useState } from "react";
import LoadMoreDataBtn from "@/components/shared/LoadMoreDataBtn";

interface ProductsListProps {
  productsList: ProductCardType[];
  fetchFilteredProducts: (
    categoryId: number,
    offset?: number,
    limit?: number
  ) => Promise<ProductCardType[]>;
  categoryId: number;
}

const ProductsList = ({
  productsList,
  fetchFilteredProducts,
  categoryId,
}: ProductsListProps) => {
  const [products, setProducts] = useState(productsList);
  const [loading, setLoading] = useState<boolean>(false);

  const offset = products.length;
  const fetchMoreProducts = async () => {
    setLoading(true);
    try {
      const moreProducts = await fetchFilteredProducts(categoryId, offset, 20);
      setProducts([...products, ...moreProducts]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            productDescription={product.productDescription}
            productImage={MouseImage}
            productName={product.productName}
            productPrice={product.productPrice}
          />
        ))}
      </div>
      <LoadMoreDataBtn
        isLoading={loading}
        fetchMoreProducts={fetchMoreProducts}
      />
    </div>
  );
};

export default ProductsList;
