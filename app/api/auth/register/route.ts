"use server";

import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { registerSchema } from "@/schemas/authSchema";
import db from "@/models";
import User from "@/models/user";
import { createAccessToken } from "@/lib/jwt";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ run validation
    const parsed = registerSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { email, firstName, lastName, phone, password } = parsed.data;

    await db.sequelize.authenticate();

    const hashedPassword = await bcrypt.hash(password, 10);

    const existedEmail = await User.findOne({
      where: { email },
    });

    if (existedEmail) {
      return NextResponse.json({
        status: 400,
        error: "User with this email already exists",
        field: "email",
      });
    }

    const existedPhone = await User.findOne({
      where: { phone },
    });

    if (existedPhone) {
      return NextResponse.json({
        status: 400,
        error: "User with this phone already exists",
        field: "phone",
      });
    }

    const user = await User.create({
      email,
      phone,
      firstName,
      lastName,
      password: hashedPassword,
      status: "member",
    });

    const accessToken = createAccessToken({ id: user.id });

    const cookieStore = await cookies();

    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 1 week
    });

    const response = NextResponse.json({
      message: "User registered successfully",
      status: 200,
    });

    return response;
  } catch (error: unknown) {
    console.error(error);

    return NextResponse.json(
      {
        error,
        status: 500,
      },
      { status: 500 }
    );
  }
}
