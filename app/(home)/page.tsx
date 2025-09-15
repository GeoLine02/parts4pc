// import Banner from "./components/banner/Banner";

import VIpProducts from "./components/vipProducts/VIpProducts";
import ProuductFilter from "../../components/shared/ProductFilter";
import Banner from "./components/banner/Banner";

export default function Home() {
  return (
    <div className="container justify-center flex flex-col gap-6 md:gap-11">
      <Banner />
      <ProuductFilter />
      <VIpProducts />
    </div>
  );
}
