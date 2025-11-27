import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "w-full px-2 py-2 text-base border rounded-sm bg-white box-border transition-colors duration-200 focus:outline-none",
  {
    variants: {
      error: {
        true: "border-form-border-error",
        false: "border-form-border focus:border-form-border-focus",
      },
      disabled: {
        true: "bg-form-bg-disabled cursor-not-allowed",
        false: "",
      },
      width: {
        small: "max-w-xs",
        medium: "max-w-md",
        large: "max-w-lg",
        full: "w-full",
      },
    },
    defaultVariants: {
      error: false,
      disabled: false,
      width: "full",
    },
  }
);

const helperTextVariants = cva("text-xs mt-1 block", {
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

interface FormInputProps extends Omit<VariantProps<typeof inputVariants>, "error" | "disabled"> {
  name: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  type?: "text" | "email" | "password" | "number" | "url";
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helpText?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  value,
  onChange,
  label,
  type = "text",
  placeholder,
  required = false,
  disabled = false,
  error,
  helpText,
  width = "full",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block mb-2 text-sm font-bold text-form-text">
          {label}
          {required && <span className="text-red-700">*</span>}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={inputVariants({ error: !!error, disabled: !!disabled, width })}
      />

      {error && <span className={helperTextVariants({ error: true })}>{error}</span>}
      {helpText && !error && <span className={helperTextVariants({ error: false })}>{helpText}</span>}
    </div>
  );
};
