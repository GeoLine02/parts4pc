"use client";

import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary";
  sizes?: "lg" | "md" | "sm";
  label?: string;
  error?: string;
}

const Input = ({
  variant,
  sizes,
  className,
  label,
  error,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-warmGray/40">{label}</label>
      )}
      <input
        className={cn(inputVariants({ variant, sizes }), className)}
        {...props}
      />
      {error && (
        <span className="text-xs font-medium text-crimsonRed">{error}</span>
      )}
    </div>
  );
};

export default Input;

const inputVariants = cva(
  "rounded-md bg-darkGray border-2 outline-none focus:outline-none focus:ring-0 focus:shadow-none font-medium",
  {
    variants: {
      variant: {
        primary:
          "border-crimsonRed/20 transition-colors hover:border-crimsonRed focus:border-crimsonRed",
        secondary:
          "border-warmGray/20 transition-colors hover:border-warmGray focus:border-warmGray",
      },
      sizes: {
        lg: "h-12 px-4 text-lg",
        md: "h-10 px-3 text-base",
        sm: "h-8 px-2 text-sm",
      },
    },
    defaultVariants: { variant: "primary", sizes: "md" },
  }
);
