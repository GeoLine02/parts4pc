import ProductsList from "@/app/category/[slug]/components/ProductsList";
import { fetchFilteredProducts } from "@/app/category/[slug]/services/filteredProducts";

const PCParts = async () => {
  // const [label, id] = (await params).slug.split("-");
  const productCategoryId = 11;
  const pcPartsData = await fetchFilteredProducts(productCategoryId);

  return (
    <div className="container justify-center flex flex-col gap-4 md:gap-6">
      <h1 className="text-3xl font-orbitron ml-8">PC Parts</h1>
      <ProductsList
        categoryId={productCategoryId}
        fetchFilteredProducts={fetchFilteredProducts}
        productsList={pcPartsData}
      />
    </div>
  );
};

export default PCParts;
