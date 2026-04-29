import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({ label, error, children, className }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label className="font-inter text-label font-medium uppercase text-owl-text-label">
        {label}
      </label>
      {children}
      {error && (
        <p className="font-inter text-body-xs text-owl-error m-0">{error}</p>
      )}
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "soft-focus w-full min-h-[52px] px-4 py-3.5 rounded-xl bg-owl-warm border border-black/20",
          "font-inter text-[15px] leading-6 text-owl-black placeholder:text-owl-text-placeholder",
          "focus:bg-[#efefef] focus:border-[#dad4cd] focus:shadow-input-focus focus:outline-none",
          error && "border-owl-error bg-[#fff8f7]",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "soft-focus w-full min-h-[168px] px-4 py-4 rounded-xl bg-owl-warm border border-black/20",
          "font-inter text-[15px] leading-6 text-owl-black placeholder:text-owl-text-placeholder",
          "resize-vertical",
          "focus:bg-[#efefef] focus:border-[#dad4cd] focus:shadow-input-focus focus:outline-none",
          error && "border-owl-error bg-[#fff8f7]",
          className
        )}
        {...props}
      />
    );
  }
);
TextArea.displayName = "TextArea";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "soft-focus w-full min-h-[52px] px-4 py-3.5 rounded-xl bg-owl-warm border border-black/20",
          "font-inter text-[15px] leading-6 text-owl-black",
          "appearance-none",
          "focus:bg-[#efefef] focus:border-[#dad4cd] focus:shadow-input-focus focus:outline-none",
          error && "border-owl-error bg-[#fff8f7]",
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = "Select";

