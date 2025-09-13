"use client";

// import Image from "next/image";
// import BannerImage from "@/public/images/graphics-card-banner.png";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import {} from ""
const Banner = () => {
  return (
    <Swiper
      className="w-full  h-[400px]"
      slidesPerView={1}
      pagination={true}
      autoplay={true}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <div>
          <span className="text-7xl font-semibold flex items-center justify-center bg-darkGray text-warmGray">
            1
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <span className="text-7xl font-semibold flex items-center justify-center bg-darkGray text-warmGray">
          2
        </span>
      </SwiperSlide>
      <SwiperSlide>
        <span className="text-7xl font-semibold flex items-center justify-center bg-darkGray text-warmGray">
          3
        </span>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
