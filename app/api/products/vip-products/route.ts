import db from "@/models";
import Products from "@/models/products";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    db.sequelize.authenticate();

    const vipProducts = await Products.findAll({
      include: [
        {
          model: User,
          as: "owner",
          where: { status: "vip" },
          attributes: [],
        },
      ],
    });

    return NextResponse.json(vipProducts, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
