import fetchData from "@/utils/customFetch";

export const fetchPrebuildsData = async (offset = 0, limit = 20) => {
  try {
    const res = await fetchData(
      `/api/products/prebuilds?limit=${limit}&offset=${offset}`
    );

    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Unable to fetch prebuilds data");
  }
};
