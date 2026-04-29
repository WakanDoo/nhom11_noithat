"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { UserIcon } from "@/components/icons/user-icon";

const AUTH_KEYS = ["owlhome_auth", "isLoggedIn"];

function isAuthenticated() {
  return AUTH_KEYS.some((k) => localStorage.getItem(k) === "true") ||
    Boolean(localStorage.getItem("owlhome_user"));
}

export function UserNavLink({
  className,
  iconClassName,
  children,
}: {
  className?: string;
  iconClassName?: string;
  children?: ReactNode;
}) {
  const [href, setHref] = useState("/login");

  useEffect(() => {
    const check = () => setHref(isAuthenticated() ? "/account" : "/login");
    check();
    window.addEventListener("storage", check);
    return () => window.removeEventListener("storage", check);
  }, []);

  return (
    <Link href={href} className={className ?? "hover:opacity-60"}>
      {children ?? <UserIcon className={iconClassName ?? "h-3.5 w-3.5"} />}
    </Link>
  );
}
