"use server";

export const fetchFilteredProducts = async (
  categoryId: number,
  offset = 0,
  limit = 20
) => {
  try {
    const res = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_API_BASE_URL
          : ""
      }/api/products/filtered-products?categoryId=${categoryId}&offset=${offset}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store", // avoid caching
      }
    );

    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
