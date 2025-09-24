import { ProductCardType } from "@/types/product";

export const fetchVipProducts = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/vip-products`,
      {
        method: "GET",
        headers: {
          "Content-Type": "applicaiton/json",
        },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return data.error;
    }

    return data as ProductCardType[];
  } catch (error) {
    console.log(error);
  }
};
