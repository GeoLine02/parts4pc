import { cookies } from "next/headers";

export const getAuthUser = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (token) {
      const res = await fetch(
        `${
          process.env.NODE_ENV === "production"
            ? process.env.NEXT_PUBLIC_RENDER_BASE_URL
            : process.env.NEXT_PUBLIC_API_BASE_URL
        }/api/auth/me`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};
