import PrebuildsList from "./components/PrebuildsList";
import { fetchPrebuildsData } from "./services/prebuilds";

const Prebuilds = async () => {
  const prebuildsData = await fetchPrebuildsData();

  console.log("prebuildsData", prebuildsData);

  return (
    <div className="container justify-center flex flex-col gap-4 md:gap-6">
      <h1 className="text-3xl font-orbitron ml-8">Prebuild PCs</h1>
      <PrebuildsList prebuildsData={prebuildsData} />
    </div>
  );
};

export default Prebuilds;
