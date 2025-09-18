import { cookies } from "next/headers";

export const getAuthUser = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (token) {
      const res = await fetch("http://localhost:3000/api/auth/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};
