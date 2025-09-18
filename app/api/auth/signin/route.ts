import db from "@/models";
import User from "@/models/user";
import { loginSchema } from "@/schemas/authSchema";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { createAccessToken } from "@/lib/jwt";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedValues = loginSchema.safeParse(body);

    if (!validatedValues.success) {
      return NextResponse.json(
        { errors: validatedValues.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { email, password } = validatedValues.data;

    await db.sequelize.authenticate();

    const existingUser = await User.findOne({ where: { email } });

    if (!existingUser)
      return NextResponse.json({
        status: 400,
        error: "User with this email does not exist",
      });

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (isMatch) {
      const accessToken = createAccessToken({ id: existingUser.id });

      const cookieStore = await cookies();

      cookieStore.set("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60,
      });

      return NextResponse.json(
        {
          status: 200,
          token: accessToken,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: error,
        status: 500,
      },
      { status: 500 }
    );
  }
}
