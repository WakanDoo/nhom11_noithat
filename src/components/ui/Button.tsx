import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#c9a96e] text-white shadow-[0_18px_40px_rgba(173,138,79,0.32)] hover:bg-[#b9965f]",
  outline:
    "border border-[#d8c9b0] bg-white/70 text-[#1b1b1b] hover:border-[#c9a96e] hover:bg-white",
};

export default function Button({
  children,
  className = "",
  fullWidth = false,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.24em] transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e]/70 disabled:pointer-events-none disabled:opacity-60",
        fullWidth ? "w-full" : "",
        variantClasses[variant],
        className,
      ].join(" ")}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
