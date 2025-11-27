import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

interface Option {
  value: string;
  label: string;
}

const formSelectVariants = cva("form-select", {
  variants: {
    error: {
      true: "error",
    },
    size: {
      sm: "form-select-sm",
      md: "form-select-md",
      lg: "form-select-lg",
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
