import VIpProducts from "./components/vipProducts/VIpProducts";
import ProuductFilter from "../../components/shared/ProductFilter";
import Banner from "./components/banner/Banner";
import { fetchVipProducts } from "./services/products";
import { fetchProductCategories } from "./services/productCategories";

export default async function Home() {
  const vipProductsData = await fetchVipProducts();
  console.log(vipProductsData);
  const productCategoriesData = await fetchProductCategories();

  return (
    <div className="container justify-center flex flex-col gap-6 md:gap-11">
      <Banner />
      <ProuductFilter productCategoriesData={productCategoriesData} />
      <VIpProducts vipProductsData={vipProductsData} />
    </div>
  );
}
