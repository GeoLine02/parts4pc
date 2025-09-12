import Image from "next/image";
import { StaticImageData } from "next/image";
import MouseImage from "@/public/images/product-filter-image.png";

interface FilterCardProps {
  filterImage: StaticImageData;
  label: string;
}

const FilterCard = ({ filterImage, label }: FilterCardProps) => {
  return (
    <div className="w-full max-w-[225px] rounded-md bg-darkGray flex items-center gap-4 justify-center cursor-pointer">
      <Image
        alt={`filter products by ${label}`}
        src={filterImage}
        height={70}
      />
      <span className="text-warmGray text-lg font-semibold">{label}</span>
    </div>
  );
};

const ProuductFilter = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-4 w-full container">
      <FilterCard label="Mice" filterImage={MouseImage} />
      <FilterCard label="Mice" filterImage={MouseImage} />
      <FilterCard label="Mice" filterImage={MouseImage} />
      <FilterCard label="Mice" filterImage={MouseImage} />
      <FilterCard label="Mice" filterImage={MouseImage} />
      <FilterCard label="Mice" filterImage={MouseImage} />
      <FilterCard label="Mice" filterImage={MouseImage} />
      <FilterCard label="Mice" filterImage={MouseImage} />
      <FilterCard label="Mice" filterImage={MouseImage} />
      <FilterCard label="Mice" filterImage={MouseImage} />
      <FilterCard label="Mice" filterImage={MouseImage} />
      <FilterCard label="Mice" filterImage={MouseImage} />
    </div>
  );
};

export default ProuductFilter;
