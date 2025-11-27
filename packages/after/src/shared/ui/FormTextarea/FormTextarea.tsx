import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const formTextareaVariants = cva("form-textarea", {
  variants: {
    error: {
      true: "error",
    },
    size: {
      sm: "form-textarea-sm",
      md: "form-textarea-md",
      lg: "form-textarea-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const formGroupVariants = cva("form-group");

const formLabelVariants = cva("form-label");

const formHelperTextVariants = cva("form-helper-text", {
  variants: {
    error: {
      true: "error",
    },
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