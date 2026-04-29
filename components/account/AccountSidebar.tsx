"use client";

import type { AccountNavItem } from "../../src/types";
import styles from "./account.module.css";

type AccountSidebarProps = {
  activeItem: AccountNavItem;
  onSelect: (item: AccountNavItem) => void;
};

const items: AccountNavItem[] = ["ACCOUNT INFORMATION", "ORDERS", "WISHLIST", "SETTINGS", "LOGOUT"];

export function AccountSidebar({ activeItem, onSelect }: AccountSidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidebarNav} aria-label="Account navigation">
        {items.map((item) => (
          <button
            className={`${styles.sidebarItem} ${activeItem === item ? styles.sidebarItemActive : ""}`}
            key={item}
            onClick={() => onSelect(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}
