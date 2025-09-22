import ProductsList from "./components/ProductsList";
import { fetchFilteredProducts } from "./services/filteredProducts";

interface FilteredProductsProps {
  params: Promise<{
    id: string;
  }>;
}
const FilteredProducts = async ({ params }: FilteredProductsProps) => {
  const categoryId = (await params).id;

  const filteredProductsData = await fetchFilteredProducts(
    parseInt(categoryId)
  );

  return (
    <div className="container justify-center flex flex-col gap-6 md:gap-11">
      <ProductsList
        fetchFilteredProducts={fetchFilteredProducts}
        categoryId={parseInt(categoryId)}
        productsList={filteredProductsData}
      />
    </div>
  );
};

export default FilteredProducts;
