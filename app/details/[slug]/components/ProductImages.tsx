"use client";

import { useState } from "react";
import MouseImage from "@/public/images/mouse.png";
import Image from "next/image";

interface AllProductImagesProps {
  images: number[];
  setActiveImage: React.Dispatch<React.SetStateAction<number>>;
  activeImage: number;
}

const AllProductImages = ({
  images,
  setActiveImage,
  activeImage,
}: AllProductImagesProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto md:overflow-y-auto md:flex-col md:overflow-x-hidden max-h-[500px]">
      {images.map((image) => (
        <div
          key={image}
          onClick={() => setActiveImage(image)}
          className={`${
            activeImage === image && "border border-crimsonRed"
          } bg-darkGray rounded-md w-24 aspect-square cursor-pointer flex items-center justify-center shrink-0`}
        >
          <h1 className="text-2xl font-medium text-crimsonRed">{image}</h1>
        </div>
      ))}
    </div>
  );
};

const ProductImages = () => {
  const fakeImages = [1, 2, 3, 4, 5, 6, 7];
  const [activeImage, setActiveImage] = useState(fakeImages[0]);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-6">
      {/* Thumbnails */}
      <AllProductImages
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        images={fakeImages}
      />

      {/* Active Image */}
      <div className="flex-1 md:max-w-[300px] bg-darkGray rounded-md flex items-center justify-center md:min-w-[350px] max-h-[500px] aspect-[4/5]">
        <Image src={MouseImage} alt="mouse image" />
      </div>
    </div>
  );
};

export default ProductImages;
