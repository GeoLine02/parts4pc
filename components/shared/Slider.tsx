"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/utils/cn";
// import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// interface SliderButtonProps {
//   direction: "left" | "right";
// }
// const SliderButton = ({ direction }: SliderButtonProps) => {
//   return (
//     <div className="border-2 border-darkGray hover:bg-crimsonRed hover-transition">
//       {direction === "left" ? <ArrowLeft className="bg-" /> : <ArrowRight />}
//     </div>
//   );
// };

interface SliderProps<T> {
  data: T[];
  renderComponent: (item: T) => React.ReactNode;
  sectionTitle: string;
}

const Slider = <T,>({
  data,
  sectionTitle,
  renderComponent,
}: SliderProps<T>) => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <section>
      <div className="flex justify-between items-center w-full mb-4">
        <h1 className={`text-xl md:text-2xl font-orbitron text-warmGray`}>
          {sectionTitle}
        </h1>
        <div className="flex gap-4 items-center">
          <div
            ref={prevRef}
            className="cursor-pointer border-2 text-deepRed border-deepRed rounded-md p-1 hover:text-darkGray hover:bg-deepRed hover-transition"
          >
            <ArrowLeft size={25} />
          </div>
          <div
            ref={nextRef}
            className="cursor-pointer border-2 text-deepRed border-deepRed rounded-md p-1 hover:text-darkGray hover:bg-deepRed hover-transtion"
          >
            <ArrowRight size={25} />
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        draggable={true}
        spaceBetween={20}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
      >
        {data?.map((item, idx) => (
          <SwiperSlide className={cn("max-w-fit")} key={idx}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
