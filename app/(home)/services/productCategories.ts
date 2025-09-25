"use server";

export const fetchProductCategories = async () => {
  try {
    const res = await fetch(
      `${
        process.env.NODE_ENV === "production"
          ? process.env.DB_PIBLIC_RENDER_BASE_URL
          : process.env.NEXT_PUBLIC_API_BASE_URL
      }/api/products/categories`
    );

    if (res.ok) {
      const data = await res.json();

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
