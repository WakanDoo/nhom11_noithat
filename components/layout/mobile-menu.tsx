"use client";

import { useEffect } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";
import styles from "./mobile-menu.module.css";

const menuLinks = [
  { href: routes.about, label: "ABOUT" },
  { href: routes.search, label: "SEARCH" },
  { href: routes.products, label: "PRODUCTS" },
  { href: routes.construction, label: "CONSTRUCTION" },
  { href: routes.checkout, label: "CHECKOUT" },
] as const;

type MobileMenuProps = {
  id: string;
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  return (
    <div className={`${styles.root} ${open ? styles.rootOpen : ""}`} aria-hidden={!open}>
      <button className={styles.backdrop} type="button" aria-label="Close menu" onClick={onClose} />
      <aside
        id={id}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className={styles.panelTop}>
          <Link href={routes.home} className={styles.brand} onClick={onClose}>
            OWLHOME
          </Link>
          <button className={styles.closeButton} type="button" aria-label="Close menu" onClick={onClose}>
            X
          </button>
        </div>

        <nav className={styles.nav} aria-label="Mobile menu">
          {menuLinks.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink} onClick={onClose}>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}
