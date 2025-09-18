import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// List of routes where signed-in users should NOT access
const guestOnlyRoutes = ["/signin", "/signup"];

export async function middleware(req: Request) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const url = new URL(req.url);

  // If user is signed in and trying to access guest-only routes, redirect to home
  if (accessToken && guestOnlyRoutes.includes(url.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Otherwise, continue
  return NextResponse.next();
}

// Apply this middleware only to relevant routes
export const config = {
  matcher: ["/signin", "/signup"],
};
