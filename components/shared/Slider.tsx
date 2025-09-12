"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/utils/cn";
// import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";

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
}

const Slider = <T,>({ data, renderComponent }: SliderProps<T>) => {
  return (
    <Swiper pagination={false} modules={[]}>
      {data.map((item, index) => (
        <SwiperSlide className={cn("max-w-fit ml-4")} key={index}>
          {renderComponent(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
