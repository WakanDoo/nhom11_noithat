"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CartBadgeLink } from "@/components/cart/cart-badge-link";
import { CartIcon } from "@/components/icons/cart-icon";
import { MenuIcon } from "@/components/icons/menu-icon";
import { SearchIcon } from "@/components/icons/search-icon";
import { UserIcon } from "@/components/icons/user-icon";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { UserNavLink } from "@/components/layout/user-nav-link";
import { routes } from "@/lib/routes";
import styles from "./site-header.module.css";

const menuId = "owlhome-mobile-menu";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <nav className={styles.desktopLeft} aria-label="Primary left navigation">
            <Link href={routes.menu} className={styles.menuLink}>
              <MenuIcon className={styles.menuIcon} />
              <span>MENU</span>
            </Link>
            <Link href={routes.about} className={styles.navLink}>
              ABOUT
            </Link>
            <Link href={routes.search} className={styles.menuLink}>
              <SearchIcon className={styles.searchIcon} />
              <span>SEARCH</span>
            </Link>
          </nav>

          <Link href={routes.home} className={styles.logo} aria-label="OWLHOME home">
            OWLHOME
          </Link>

          <div className={styles.desktopRightIcons}>
            <ThemeToggle className={styles.iconButton} />
            <CartBadgeLink className={styles.iconButton}>
              <CartIcon className={styles.cartIcon} />
            </CartBadgeLink>
            <UserNavLink className={styles.iconButton}>
              <UserIcon className={styles.userIcon} />
            </UserNavLink>
          </div>

          <nav className={styles.desktopRightLinks} aria-label="Primary right navigation">
            <Link href={routes.products} className={styles.navLink}>
              PRODUCTS
            </Link>
            <Link href={routes.construction} className={styles.navLink}>
              CONSTRUCTION
            </Link>
          </nav>

          <div className={styles.tabletLeft}>
            <button
              className={styles.iconButton}
              type="button"
              aria-label="Open menu"
              aria-controls={menuId}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon className={styles.menuIcon} />
            </button>
            <Link href={routes.search} className={`${styles.iconButton} ${styles.mobileSearch}`} aria-label="Search">
              <SearchIcon className={styles.searchIcon} />
            </Link>
          </div>

          <div className={styles.tabletRight}>
            <ThemeToggle className={styles.iconButton} />
            <CartBadgeLink className={styles.iconButton}>
              <CartIcon className={styles.cartIcon} />
            </CartBadgeLink>
            <UserNavLink className={styles.iconButton}>
              <UserIcon className={styles.userIcon} />
            </UserNavLink>
          </div>
        </div>
      </header>

      <MobileMenu id={menuId} open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
