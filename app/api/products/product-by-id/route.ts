import Products from "@/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    console.log("productId", searchParams);
    const productId = searchParams.get("id");
    if (!productId)
      return NextResponse.json(
        {
          message: "product id is missing",
        },
        { status: 400 }
      );

    const productById = await Products.findOne({
      where: { id: productId },
    });

    if (!productById)
      return NextResponse.json(
        {
          message: "product with this id does not exist",
        },
        { status: 400 }
      );

    return NextResponse.json(productById, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Unable to fetch product",
      },
      { status: 500 }
    );
  }
}
