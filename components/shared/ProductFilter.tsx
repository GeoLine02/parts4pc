"use client";

import Image, { StaticImageData } from "next/image";
import MouseImage from "@/public/images/product-filter-image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { ProductCategoryType } from "@/types/productCategories";
import Link from "next/link";

interface FilterCardProps {
  filterImage: StaticImageData;
  label: string;
  id: number;
}

const FilterCard = ({ filterImage, label, id }: FilterCardProps) => {
  return (
    <Link
      href={`/category/${label}-${id}`}
      className="w-[225px] min-w-[225px] rounded-md bg-darkGray flex items-center gap-4 justify-center cursor-pointer p-2 md:p-4"
    >
      <Image
        alt={`filter products by ${label}`}
        src={filterImage}
        height={70}
      />
      <span className="text-warmGray text-lg font-semibold">{label}</span>
    </Link>
  );
};

interface ProductFilterProps {
  productCategoriesData: ProductCategoryType[];
}

const ProductFilter = ({ productCategoriesData }: ProductFilterProps) => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        freeMode={true}
        draggable={true}
        grabCursor={true}
        modules={[Navigation, FreeMode]}
        className="w-full"
      >
        {productCategoriesData?.map((category) => (
          <SwiperSlide key={category.id} className="!w-auto">
            <FilterCard
              label={category.categoryName}
              filterImage={MouseImage}
              id={category.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductFilter;
