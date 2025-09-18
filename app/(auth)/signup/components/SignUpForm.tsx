"use client";

import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { UserRegisterErrorsType } from "@/types/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<UserRegisterErrorsType | null | string>(
    null
  );
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    // Convert FormData to JSON
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (data.error) {
        setError(data.error);
        return;
      }

      if (!res.ok) {
        setError(data.errors || "Something went wrong");
        setLoading(false);
        return;
      }

      if (data.status === 200) router.push("/");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log("error: ", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const isValidationError = typeof error === "object";
  const isServerError = typeof error === "string";

  return (
    <Card className="w-full max-w-[400px] bg-darkGray flex flex-col items-center gap-4 py-12 px-6">
      <Logo />
      <form onSubmit={handleSubmit} className="w-full">
        <div className="space-y-4">
          <Input
            name="firstName"
            label="First Name"
            type="text"
            placeholder="Jhon"
            error={isValidationError ? error?.firstName?.[0] : undefined}
          />
          <Input
            name="lastName"
            label="Last Name"
            type="text"
            placeholder="Doe"
            error={isValidationError ? error?.lastName?.[0] : undefined}
          />
          <Input
            name="email"
            label="email"
            type="email"
            placeholder="email@example.com"
            error={isValidationError ? error?.email?.[0] : undefined}
          />
          <Input
            name="phone"
            label="Phone Number"
            type="text"
            placeholder="+995 577 12 42 15"
            error={isValidationError ? error?.phone?.[0] : undefined}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="password123"
            error={isValidationError ? error?.password?.[0] : undefined}
          />
          <Input
            name="repeatPassword"
            label="Repeat Password"
            type="password"
            placeholder="password123"
            error={isValidationError ? error?.repeatPassword?.[0] : undefined}
          />

          {isServerError && (
            <span className="text-center text-crimsonRed font-bold mb-2">
              {error}
            </span>
          )}

          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2"
          >
            {loading && <ClipLoader color="black" />}
            Sign Up
          </Button>
          <p className="text-center">
            Already have an account?{" "}
            <Link href={"/signin"} className="underline font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </Card>
  );
};

export default SignUpForm;
