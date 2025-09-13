"use client";

// import Image from "next/image";
// import BannerImage from "@/public/images/graphics-card-banner.png";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
const Banner = () => {
  return (
    <Swiper
      className="w-full"
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      modules={[Pagination, Autoplay]}
    >
      <SwiperSlide>
        <span className="text-7xl font-semibold flex items-center justify-center bg-darkGray text-warmGray h-[250px] md:h-[400px]">
          1
        </span>
      </SwiperSlide>
      <SwiperSlide>
        <span className="text-7xl font-semibold flex items-center justify-center bg-darkGray text-warmGray h-[250px] md:h-[400px]">
          2
        </span>
      </SwiperSlide>
      <SwiperSlide>
        <span className="text-7xl font-semibold flex items-center justify-center bg-darkGray text-warmGray h-[250px] md:h-[400px]">
          3
        </span>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
