import type { SVGProps } from "react";

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="10.75" cy="10.75" r="6.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="m15.75 15.75 4.75 4.75" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
