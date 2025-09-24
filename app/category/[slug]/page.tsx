import ProductsList from "./components/ProductsList";
import { fetchFilteredProducts } from "./services/filteredProducts";

interface FilteredProductsProps {
  params: Promise<{
    slug: string;
  }>;
}
const FilteredProducts = async ({ params }: FilteredProductsProps) => {
  const [label, id] = (await params).slug.split("-");
  console.log(label, id);
  const filteredProductsData = await fetchFilteredProducts(parseInt(id));

  return (
    <div className="container justify-center flex flex-col gap-4 md:gap-6">
      <h1 className="text-3xl font-orbitron ml-8">{label}</h1>
      <ProductsList
        fetchFilteredProducts={fetchFilteredProducts}
        categoryId={parseInt(id)}
        productsList={filteredProductsData}
      />
    </div>
  );
};

export default FilteredProducts;
