import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type InfoIcon = "clock" | "pin" | "globe";

interface InfoCardProps {
  icon: InfoIcon;
  title: string;
  lines: readonly string[];
  className?: string;
}

const CardIcon = ({ icon }: { icon: InfoIcon }) => {
  if (icon === "clock") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-full h-full block"
      >
        <circle
          cx="12"
          cy="12"
          r="8.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M12 7.5V12l3 2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "pin") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-full h-full block"
      >
        <path
          d="M12 20s-5-4.8-5-9a5 5 0 1 1 10 0c0 4.2-5 9-5 9Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="11"
          r="1.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="w-full h-full block"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3.8 12h16.4M12 3.5c2.1 2.2 3.3 5.2 3.3 8.5S14.1 18.3 12 20.5M12 3.5C9.9 5.7 8.7 8.7 8.7 12s1.2 6.3 3.3 8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export function InfoCard({ icon, title, lines, className }: InfoCardProps) {
  return (
    <div
      className={cn(
        "interactive-card reveal-on-scroll w-full bg-white rounded-2xl border border-owl-border shadow-card",
        "flex flex-col gap-6 p-7 md:min-h-[248px] lg:min-h-[280px]",
        className
      )}
    >
      <div className="w-7 h-7 text-owl-black">
        <CardIcon icon={icon} />
      </div>
      <div className="flex flex-col gap-[18px]">
        <h3 className="font-cormorant text-heading-3 md:text-[28px] md:leading-[34px] text-owl-black">
          {title}
        </h3>
        <div className="flex flex-col gap-3 font-inter text-body-base md:text-sm md:leading-[22px] text-owl-text-muted">
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

