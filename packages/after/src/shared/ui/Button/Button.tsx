import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      primary: "btn-primary",
      secondary: "btn-secondary",
      danger: "btn-danger",
      success: "btn-success",
    },
    size: {
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    },
    fullWidth: {
      true: "btn-fullwidth",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, type = "button", children, ...props }, ref) => {
    return (
      <button ref={ref} type={type} className={buttonVariants({ variant, size, fullWidth, className })} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
