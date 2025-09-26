import ProductCategories from "@/models/productcategories";

export async function POST() {
  try {
    await ProductCategories.bulkCreate([
      {
        id: 1,
        categoryName: "Mouse",
      },
      {
        id: 2,
        categoryName: "Keyboard",
      },
      {
        id: 3,
        categoryName: "CPU",
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
