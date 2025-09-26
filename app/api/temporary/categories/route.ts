import ProductCategories from "@/models/productcategories";
import { NextResponse } from "next/server";

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

    return NextResponse.json({ messag: "seed added" }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
