import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
  );
};

export default Button;

const buttonVariants = cva("py-2 px-4 rounded-md font-semibold", {
  variants: {
    variant: {
      primary: "bg-crimsonRed text-white hover:opacity-50 hover-transition",
      secondary: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
