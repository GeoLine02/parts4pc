"use client";

import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
// import { useActionState } from "react";
// import { ClipLoader } from "react-spinners";

const SignInForm = () => {
  //   const [state, action, pending] = useActionState(() => {}, undefined);

  return (
    <Card className="w-full max-w-[400px] bg-darkGray flex flex-col items-center gap-4 py-12 px-6">
      <Logo />
      <form
        className="w-full"
        //   action={action}
      >
        <div className="space-y-4">
          <Input
            label="email"
            type="email"
            placeholder="YourEmail@example.com"
            // error={state?.error?.email?.[0]}
          />
          <Input
            label="password"
            type="password"
            placeholder="YourPassword"
            // error={state?.error?.password?.[0]}
          />
          <Button className="w-full">
            {/* {pending && <ClipLoader color="black" />} */}
            Sign In
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default SignInForm;
