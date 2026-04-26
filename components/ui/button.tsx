import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  icon?: boolean;
}

export function Button({
  variant = "primary",
  children,
  icon = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "interactive-button inline-flex items-center justify-center gap-2 rounded-pill font-inter font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-owl-black/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-70";

  const variants = {
    primary:
      "h-[38px] min-w-[162px] px-8 bg-owl-black text-white text-sm hover:bg-[#242424]",
    secondary:
      "h-[34px] min-w-[126px] px-6 bg-white text-owl-black text-body-xs hover:bg-owl-cream",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span>{children}</span>
      {icon && (
        <span className="flex items-center justify-center text-[15px] leading-none">
          &#8594;
        </span>
      )}
    </button>
  );
}

