import Products from "@/models/products";

export async function GET() {
  try {
    await Products.bulkCreate([]);
  } catch (error) {
    console.log(error);
  }
}
