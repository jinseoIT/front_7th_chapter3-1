import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

interface Option {
  value: string;
  label: string;
}

const formSelectVariants = cva(
  "w-full border rounded-sm bg-white box-border transition-colors duration-200 focus:outline-none text-form-text",
  {
    variants: {
      error: {
        true: "border-form-border-error",
        false: "border-form-border focus:border-form-border-focus",
      },
      size: {
        sm: "px-2 py-2 text-sm",
        md: "px-2 py-2 text-base",
        lg: "px-4 py-4 text-lg",
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

export interface FormSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange" | "size">,
    Omit<VariantProps<typeof formSelectVariants>, "error"> {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  label?: string;
  placeholder?: string;
  error?: string;
  helpText?: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  className,
  name,
  value,
  onChange,
  options,
  label,
  placeholder = "Select an option...",
  required = false,
  disabled = false,
  error,
  helpText,
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

      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        disabled={disabled}
        className={formSelectVariants({ error: !!error, size, className })}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <span className={formHelperTextVariants({ error: true })}>{error}</span>}
      {helpText && !error && <span className={formHelperTextVariants()}>{helpText}</span>}
    </div>
  );
};
