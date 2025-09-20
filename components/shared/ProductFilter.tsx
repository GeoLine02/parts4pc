"use client";

import Image, { StaticImageData } from "next/image";
import MouseImage from "@/public/images/product-filter-image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { ProductCategoryType } from "@/types/productCategories";

interface FilterCardProps {
  filterImage: StaticImageData;
  label: string;
}

const FilterCard = ({ filterImage, label }: FilterCardProps) => {
  return (
    <div className="w-[225px] min-w-[225px] rounded-md bg-darkGray flex items-center gap-4 justify-center cursor-pointer p-4">
      <Image
        alt={`filter products by ${label}`}
        src={filterImage}
        height={70}
      />
      <span className="text-warmGray text-lg font-semibold">{label}</span>
    </div>
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
        <SwiperSlide className="!w-auto">
          <FilterCard label="Mice" filterImage={MouseImage} />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <FilterCard label="Keyboards" filterImage={MouseImage} />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <FilterCard label="Headsets" filterImage={MouseImage} />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <FilterCard label="Monitors" filterImage={MouseImage} />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <FilterCard label="Controllers" filterImage={MouseImage} />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <FilterCard label="Controllers" filterImage={MouseImage} />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <FilterCard label="Controllers" filterImage={MouseImage} />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <FilterCard label="Controllers" filterImage={MouseImage} />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <FilterCard label="Controllers" filterImage={MouseImage} />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <FilterCard label="Controllers" filterImage={MouseImage} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductFilter;
