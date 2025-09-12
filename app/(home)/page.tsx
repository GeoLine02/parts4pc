// import Banner from "./components/banner/Banner";

import VIpProducts from "./components/vipProducts/VIpProducts";
import ProuductFilter from "./filter/ProductFilter";

export default function Home() {
  return (
    <div className="container justify-center flex flex-col gap-14">
      <ProuductFilter />
      <VIpProducts />
    </div>
  );
}
