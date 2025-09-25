import db from "@/models";
import ProductCategories from "@/models/productcategories";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    db.sequelize.authenticate();

    const productCategories = await ProductCategories.findAll();

    return NextResponse.json(productCategories, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error,
        error: "Failed to fetch product categories",
      },
      {
        status: 500,
      }
    );
  }
}
