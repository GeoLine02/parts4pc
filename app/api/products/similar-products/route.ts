import Products from "@/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId");

    if (!categoryId)
      return NextResponse.json(
        { messaage: "category id is missing" },
        { status: 400 }
      );

    const similarProducts = await Products.findAll({
      where: { productCategoryId: categoryId },
      limit: 15,
    });

    return NextResponse.json(similarProducts, { status: 200 });
  } catch (errror) {
    console.log(errror);
    return NextResponse.json(
      {
        message: "Unable to fetch product",
      },
      { status: 500 }
    );
  }
}
