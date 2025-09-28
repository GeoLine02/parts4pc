export const fetchProductById = async (id: number) => {
  try {
    const res = await fetch(
      `${
        process.env.NODE_ENV === "production"
          ? process.env.NEXT_PUBLIC_RENDER_BASE_URL
          : process.env.NEXT_PUBLIC_API_BASE_URL
      }/api/products/product-by-id?id=${id}`
    );

    if (res.ok) {
      const data = await res.json();

      return data;
    }
  } catch (error) {
    console.log(error);
    throw new Error(`unable to fetch product with id ${id}`);
  }
};
