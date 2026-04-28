"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function CartBadgeLink({ children, className }: Props) {
  const [mounted, setMounted] = useState(false);
  const count = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link href="/cart" className={`relative inline-flex ${className ?? ""}`}>
      {children}
      {mounted && count > 0 && (
        <span className="absolute -right-1.5 -top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black text-[9px] font-bold leading-none text-white">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}
