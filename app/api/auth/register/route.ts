"use server";

import { initDb } from "@/lib/initDb";
import { createAccessToken, createRefreshToken } from "@/lib/jwt";
import User from "@/models/user";
import { registerSchema } from "@/schemas/authSchema";
import { entityValidator } from "@/utils/entityValidator";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { serialize } from "cookie";
import sequelize from "@/lib/sequelize";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const { isValid, errors } = await entityValidator(registerSchema, body);
    if (!isValid)
      return NextResponse.json(
        { message: "Bad request", errors },
        { status: 400 }
      );
    await sequelize.authenticate();
    await initDb();

    // Hash password
    const hashedPassword = await bcrypt.hash(body.password, 10);
    console.log("isValid: ", isValid);
    // Create user
    const user = await User.create({
      email: body.email,
      phone: body.phone,
      firstName: body.firstName,
      lastName: body.lastName,
      password: hashedPassword,
    });

    // Generate tokens
    const accessToken = createAccessToken({ id: user.id });
    const refreshToken = createRefreshToken({ id: user.id });

    // Create cookies
    const accessCookie = serialize("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "none",
      maxAge: 15 * 60, // 15 minutes
    });

    const refreshCookie = serialize("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userData } = user.get({ plain: true });

    const response = NextResponse.json({
      message: "User registered successfully",
      user: userData,
    });

    // Set both cookies
    response.headers.append("Set-Cookie", accessCookie);
    response.headers.append("Set-Cookie", refreshCookie);

    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
