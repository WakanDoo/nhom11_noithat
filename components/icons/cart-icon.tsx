import type { SVGProps } from "react";

export function CartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3.5 4.5h2l2.1 10.5h10.1l2.3-7.5H7.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="8" cy="19" r="1.35" fill="currentColor" />
      <circle cx="17" cy="19" r="1.35" fill="currentColor" />
    </svg>
  );
}
