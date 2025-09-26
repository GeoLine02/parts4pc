import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await User.create({
      firstName: "nika",
      lastName: "wuladze",
      email: "nikaWuladze@gmail.com",
      status: "vip",
      phone: "123123123",
      password: "hashedpassword",
    });
    return NextResponse.json({ message: "Seed added" });
  } catch (error) {
    console.log(error);
  }
}
