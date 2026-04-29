import type { SVGProps } from "react";

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="7.5" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.25 20c1.55-3.65 3.8-5.48 6.75-5.48S17.2 16.35 18.75 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
