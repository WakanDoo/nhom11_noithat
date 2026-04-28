import type { InputHTMLAttributes } from "react";

import Icon, { type IconName } from "./Icon";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  error?: string;
  icon?: IconName;
  label: string;
};

export default function Input({
  className = "",
  error,
  icon,
  id,
  label,
  ...props
}: InputProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-[#6d6255]">
        {label}
      </span>
      <div
        className={[
          "flex items-center gap-3 rounded-[1.4rem] border bg-white/80 px-4 py-4 shadow-[0_12px_28px_rgba(41,31,19,0.08)] transition focus-within:border-[#c9a96e] focus-within:bg-white focus-within:shadow-[0_14px_32px_rgba(41,31,19,0.12)]",
          error ? "border-[#b65b5b]" : "border-white/70",
          className,
        ].join(" ")}
      >
        <input
          aria-invalid={Boolean(error)}
          className="w-full bg-transparent text-base text-[#171717] outline-none placeholder:text-[#85796d]"
          id={id}
          {...props}
        />
        {icon ? <Icon className="shrink-0 text-[#4f463d]" name={icon} size={18} /> : null}
      </div>
      {error ? <p className="mt-2 text-sm text-[#b65b5b]">{error}</p> : null}
    </label>
  );
}
