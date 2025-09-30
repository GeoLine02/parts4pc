"use client";

import ProductCard from "@/components/shared/ProductCard";
import { PreBuildType } from "@/types/prebuilds";
import MouseImage from "@/public/images/mouse.png";
import LoadMoreDataBtn from "@/components/shared/LoadMoreDataBtn";
import { useState } from "react";
import { fetchPrebuildsData } from "../services/prebuilds";

interface PrebuildsProps {
  prebuildsData: PreBuildType[];
}

const PrebuildsList = ({ prebuildsData }: PrebuildsProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [prebuilds, setPrebuilds] = useState(prebuildsData);
  const offset = prebuilds.length;

  const fetchMorePreubilds = async () => {
    setLoading(true);
    try {
      const morePrebuilds = await fetchPrebuildsData(offset, 20);
      setPrebuilds([...prebuilds, ...morePrebuilds]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 ">
        {prebuilds.map((prebuild) => (
          <ProductCard
            id={prebuild.id}
            productDescription=""
            productImage={MouseImage}
            productName={prebuild.product_name}
            key={prebuild.id}
            productPrice={prebuild.price}
          />
        ))}
      </div>
      <LoadMoreDataBtn
        isLoading={loading}
        fetchMoreProducts={fetchMorePreubilds}
      />
    </>
  );
};

export default PrebuildsList;
