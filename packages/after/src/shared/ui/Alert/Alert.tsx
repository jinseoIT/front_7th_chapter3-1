import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const alertVariants = cva(
  "flex gap-2 items-start p-4 mb-4 rounded-sm border",
  {
    variants: {
      variant: {
        default: "bg-alert-default-bg border-alert-default-border text-alert-default-text",
        info: "bg-alert-info-bg border-alert-info-border text-alert-info-text",
        success: "bg-alert-success-bg border-alert-success-border text-alert-success-text",
        warning: "bg-alert-warning-bg border-alert-warning-border text-alert-warning-text",
        error: "bg-alert-error-bg border-alert-error-border text-alert-error-text",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const alertIconVariants = cva("text-xl flex-shrink-0");
const alertContentVariants = cva("flex-1");
const alertTitleVariants = cva("font-bold mb-1 text-base");
const alertBodyVariants = cva("text-sm leading-6");
const alertCloseVariants = cva("bg-transparent border-none cursor-pointer text-xl p-0 px-1 ml-auto flex-shrink-0");

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
