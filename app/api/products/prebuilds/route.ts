import db from "@/models";
import PreBuilds from "@/models/prebuilds";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const limit = parseInt(searchParams.get("limit") || "20", 10);
    const offset = parseInt(searchParams.get("offset") || "0", 10);
    db.sequelize.authenticate();

    const prebuilds = await PreBuilds.findAll({
      limit,
      offset,
      order: [["id", "ASC"]],
    });

    return NextResponse.json(prebuilds, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Unable to fetch prebuilds data",
      },
      {
        status: 500,
      }
    );
  }
}
