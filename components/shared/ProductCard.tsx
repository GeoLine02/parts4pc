"use client";

import Card from "../ui/Card";
import Image, { StaticImageData } from "next/image";
import { Heart } from "lucide-react";
import Button from "../ui/Button";
import ProductCardImage from "@/public/images/mouse.png";

interface ProductCardProps {
  id: number;
  productName: string;
  productPrice: number;
  productDescription: string;
  productImage: StaticImageData;
}

const ProductCard = ({
  productName,
  productPrice,
  productDescription,
}: // productImage,
ProductCardProps) => {
  return (
    <Card className="group rounded-xl bg-darkGray shadow-md hover:shadow-lg flex flex-col w-full max-w-44 md:max-w-64 h-[22rem]">
      {/* Image */}
      <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden rounded-xl">
        <Image
          src={ProductCardImage}
          alt=""
          className="object-contain w-full transition-transform duration-300 group-hover:scale-105"
        />
        <button className="absolute top-3 right-3 p-2 bg-white hover:text-warmGray rounded-full shadow hover-transition hover:bg-crimsonRed">
          <Heart className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-semibold truncate text-warmGray">
          {productName}
        </h3>
        <p className="text-sm text-warmGray line-clamp-2">
          {productDescription}
        </p>

        {/* Price & Action */}
        <div className="mt-auto flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center justify-between">
          <span className="text-xl font-bold text-green-600">
            ${productPrice.toFixed(2)}
          </span>
          <Button
            className="flex items-center justify-center gap-2 w-full md:w-auto"
            variant="primary"
          >
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
