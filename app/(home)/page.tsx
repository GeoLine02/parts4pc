// import Banner from "./components/banner/Banner";

import VIpProducts from "./components/vipProducts/VIpProducts";
import ProuductFilter from "../../components/shared/filter/ProductFilter";
import Banner from "./components/banner/Banner";

export default function Home() {
  return (
    <div className="container justify-center flex flex-col gap-14">
      {/* <Banner /> */}
      <ProuductFilter />
      <VIpProducts />
    </div>
  );
}
