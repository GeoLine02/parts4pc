import Products from "@/models/products";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await Products.bulkCreate([]);
    return NextResponse.json(
      {
        message: "seed added",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
