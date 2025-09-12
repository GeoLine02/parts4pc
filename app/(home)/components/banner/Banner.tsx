"use client";

import Image from "next/image";
import BannerImage from "@/public/images/graphics-card-banner.png";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <Swiper
      className="max-w-screen"
      slidesPerView={1}
      pagination={true}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <Image src={BannerImage} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={BannerImage} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={BannerImage} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
