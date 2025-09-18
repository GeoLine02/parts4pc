"use client";

import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { UserSignInErrorsType } from "@/types/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ClipLoader } from "react-spinners";

const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<UserSignInErrorsType | null | string>(
    null
  );
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    const body = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }

      if (!res.ok) {
        setError(data.errors || "Something went wrong");
        setLoading(false);
      }

      if (data.status === 200) router.push("/");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err);
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
            name="email"
            label="email"
            type="email"
            placeholder="email@example.com"
            error={isValidationError ? error?.email?.[0] : undefined}
          />

          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="password123"
            error={isValidationError ? error?.password?.[0] : undefined}
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
            Sign In
          </Button>
          <p className="text-center">
            Already have an account?{" "}
            <Link href={"/signup"} className="underline font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </Card>
  );
};

export default SignInForm;
