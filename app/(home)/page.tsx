import VIpProducts from "./components/vipProducts/VIpProducts";
import ProuductFilter from "../../components/shared/ProductFilter";
import Banner from "./components/banner/Banner";
import { fetchVipProducts } from "./services/products";

export default async function Home() {
  const vipProductsData = await fetchVipProducts();
  return (
    <div className="container justify-center flex flex-col gap-6 md:gap-11">
      <Banner />
      <ProuductFilter />
      <VIpProducts vipProductsData={vipProductsData} />
    </div>
  );
}
