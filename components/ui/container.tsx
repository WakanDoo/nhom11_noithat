import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "main" | "content";
}

export function Container({
  children,
  className,
  size = "main",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto",
        size === "main" ? "max-w-container" : "max-w-content",
        className
      )}
    >
      {children}
    </div>
  );
}

