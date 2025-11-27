import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center justify-center font-bold leading-none whitespace-nowrap rounded-sm",
  {
    variants: {
      variant: {
        primary: "bg-badge-primary text-white",
        secondary: "bg-badge-secondary text-white",
        success: "bg-badge-success text-white",
        danger: "bg-badge-danger text-white",
        warning: "bg-badge-warning text-white",
        info: "bg-badge-info text-white",
      },
      size: {
        small: "h-4 px-1 text-xs",
        medium: "h-5 px-2 text-sm",
        large: "h-6 px-2 text-base",
      },
      pill: {
        true: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    Omit<VariantProps<typeof badgeVariants>, 'variant'> {
  children?: React.ReactNode;
  type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  status?: "published" | "draft" | "archived" | "pending" | "rejected";
  userRole?: "admin" | "moderator" | "user" | "guest";
  priority?: "high" | "medium" | "low";
  paymentStatus?: "paid" | "pending" | "failed" | "refunded";
}

const getStatusConfig = (status: BadgeProps["status"]) => {
  switch (status) {
    case "published":
      return { variant: "success" as const, text: "게시됨" };
    case "draft":
      return { variant: "warning" as const, text: "임시저장" };
    case "archived":
      return { variant: "secondary" as const, text: "보관됨" };
    case "pending":
      return { variant: "info" as const, text: "대기중" };
    case "rejected":
      return { variant: "danger" as const, text: "거부됨" };
    default:
      return null;
  }
};

const getUserRoleConfig = (userRole: BadgeProps["userRole"]) => {
  switch (userRole) {
    case "admin":
      return { variant: "danger" as const, text: "관리자" };
    case "moderator":
      return { variant: "warning" as const, text: "운영자" };
    case "user":
      return { variant: "primary" as const, text: "사용자" };
    case "guest":
      return { variant: "secondary" as const, text: "게스트" };
    default:
      return null;
  }
};

const getPriorityConfig = (priority: BadgeProps["priority"]) => {
  switch (priority) {
    case "high":
      return { variant: "danger" as const, text: "높음" };
    case "medium":
      return { variant: "warning" as const, text: "보통" };
    case "low":
      return { variant: "info" as const, text: "낮음" };
    default:
      return null;
  }
};

const getPaymentStatusConfig = (paymentStatus: BadgeProps["paymentStatus"]) => {
  switch (paymentStatus) {
    case "paid":
      return { variant: "success" as const, text: "결제완료" };
    case "pending":
      return { variant: "warning" as const, text: "결제대기" };
    case "failed":
      return { variant: "danger" as const, text: "결제실패" };
    case "refunded":
      return { variant: "secondary" as const, text: "환불됨" };
    default:
      return null;
  }
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      type,
      size,
      pill,
      status,
      userRole,
      priority,
      paymentStatus,
      children,
      ...props
    },
    ref
  ) => {
    let actualVariant = type;
    let actualContent = children;

    const statusConfig = status ? getStatusConfig(status) : null;
    const userRoleConfig = userRole ? getUserRoleConfig(userRole) : null;
    const priorityConfig = priority ? getPriorityConfig(priority) : null;
    const paymentStatusConfig = paymentStatus ? getPaymentStatusConfig(paymentStatus) : null;

    // Priority: paymentStatus > priority > userRole > status > type
    if (paymentStatusConfig) {
      actualVariant = paymentStatusConfig.variant;
      actualContent = actualContent || paymentStatusConfig.text;
    } else if (priorityConfig) {
      actualVariant = priorityConfig.variant;
      actualContent = actualContent || priorityConfig.text;
    } else if (userRoleConfig) {
      actualVariant = userRoleConfig.variant;
      actualContent = actualContent || userRoleConfig.text;
    } else if (statusConfig) {
      actualVariant = statusConfig.variant;
      actualContent = actualContent || statusConfig.text;
    }

    return (
      <span
        ref={ref}
        className={badgeVariants({ variant: actualVariant, size, pill, className })}
        {...props}
      >
        {actualContent}
      </span>
    );
  }
);

Badge.displayName = "Badge";
