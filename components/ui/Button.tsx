"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

// Variants with CVA
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-crimsonRed text-white hover:bg-red-700 focus:ring-crimsonRed",
        outline:
          "border border-gray-600 text-gray-200 hover:bg-gray-800 focus:ring-gray-500",
        ghost:
          "bg-transparent hover:bg-gray-900 text-gray-200 focus:ring-gray-500",
      },
      size: {
        sm: "px-3 py-1.5 text-sm gap-1.5",
        md: "px-4 py-2 text-base gap-2",
        lg: "px-6 py-3 text-lg gap-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const ButtonRoot = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

ButtonRoot.displayName = "Button";

// Compound subcomponents
const ButtonIcon = ({ children }: { children: React.ReactNode }) => (
  <span className="flex items-center">{children}</span>
);

const ButtonLabel = ({ children }: { children: React.ReactNode }) => (
  <span>{children}</span>
);

// Attach subcomponents
const Button = Object.assign(ButtonRoot, {
  Icon: ButtonIcon,
  Label: ButtonLabel,
});

export default Button;
