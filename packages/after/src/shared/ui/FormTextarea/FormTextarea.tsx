import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const formTextareaVariants = cva(
  "w-full min-h-[6em] border rounded-md bg-white box-border transition-colors duration-200 focus:outline-none resize-vertical text-form-text font-normal leading-6",
  {
    variants: {
      error: {
        true: "border-form-border-error",
        false: "border-form-border focus:border-form-border-focus focus:border-2 focus:p-[calc(1rem-1px)]",
      },
      size: {
        sm: "p-2 text-sm",
        md: "p-4 text-base",
        lg: "p-6 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  }
);

const formGroupVariants = cva("mb-4");

const formLabelVariants = cva("block mb-2 text-sm font-bold text-form-text");

const formHelperTextVariants = cva("text-xs mt-1 block", {
  variants: {
    error: {
      true: "text-form-border-error",
      false: "text-form-placeholder",
    },
  },
  defaultVariants: {
    error: false,
  },
});

export interface FormTextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "onChange" | "size">,
    Omit<VariantProps<typeof formTextareaVariants>, "error"> {
  name: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  helpText?: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  className,
  name,
  value,
  onChange,
  label,
  placeholder,
  required = false,
  disabled = false,
  error,
  helpText,
  rows = 4,
  size = "md",
  ...props
}) => {
  return (
    <div className={formGroupVariants()}>
      {label && (
        <label className={formLabelVariants()}>
          {label}
          {required && <span className="text-red-700">*</span>}
        </label>
      )}

      <textarea
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className={formTextareaVariants({ error: !!error, size, className })}
        {...props}
      />

      {error && <span className={formHelperTextVariants({ error: true })}>{error}</span>}
      {helpText && !error && <span className={formHelperTextVariants()}>{helpText}</span>}
    </div>
  );
};