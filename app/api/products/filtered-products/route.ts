import db from "@/models";
import ProductCategories from "@/models/productcategories";
import Products from "@/models/products";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId");
    const limit = parseInt(searchParams.get("limit") || "20", 10);
    const offset = parseInt(searchParams.get("offset") || "0", 10);

    db.sequelize.authenticate();

    const filteredProducts = await Products.findAll({
      include: {
        model: ProductCategories,
        as: "category",
        where: { categoryId },
      },
      limit,
      offset,
      order: [["id", "ASC"]], // ensure consistent order
    });

    return NextResponse.json(filteredProducts, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
