import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  try {
    const token = req.headers.get("authorization");

    if (!token)
      return NextResponse.json({
        status: 401,
        message: "token not found",
      });

    const accessToken = token.startsWith("Bearer ") ? token.slice(7) : token;

    const decodedToken = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET as string
    ) as { id: number };

    const user = await User.findOne({
      where: { id: decodedToken.id },
    });

    return NextResponse.json({
      status: 200,
      user,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("erorr: ", error);
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}
