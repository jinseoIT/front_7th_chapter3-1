import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const alertVariants = cva("alert", {
  variants: {
    variant: {
      default: "alert-default",
      info: "alert-info",
      success: "alert-success",
      warning: "alert-warning",
      error: "alert-error",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const alertIconVariants = cva("alert-icon");
const alertContentVariants = cva("alert-content");
const alertTitleVariants = cva("alert-title");
const alertBodyVariants = cva("alert-body");
const alertCloseVariants = cva("alert-close");

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  children: React.ReactNode;
  title?: string;
  onClose?: () => void;
  showIcon?: boolean;
}

const getIcon = (variant: AlertProps["variant"]) => {
  switch (variant) {
    case "info":
      return "ℹ️";
    case "success":
      return "✓";
    case "warning":
      return "⚠️";
    case "error":
      return "✕";
    default:
      return "•";
  }
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, onClose, showIcon = true, children, ...props }, ref) => {
    return (
      <div ref={ref} className={alertVariants({ variant, className })} {...props}>
        {showIcon && <div className={alertIconVariants()}>{getIcon(variant)}</div>}
        <div className={alertContentVariants()}>
          {title && <div className={alertTitleVariants()}>{title}</div>}
          <div className={alertBodyVariants()}>{children}</div>
        </div>
        {onClose && (
          <button onClick={onClose} className={alertCloseVariants()}>
            ×
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = "Alert";
