"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { CartBadgeLink } from "@/components/CartBadgeLink";
import type { AccountData, AccountNavItem } from "../../src/types";
import { AccountInformationForm } from "./AccountInformationForm";
import { AccountSidebar } from "./AccountSidebar";
import { LogoutConfirmModal } from "./LogoutConfirmModal";
import { OrdersPanel } from "./OrdersPanel";
import { SettingsPanel } from "./SettingsPanel";
import { WishlistPanel } from "./WishlistPanel";
import styles from "./account.module.css";

const defaultAccount: AccountData = {
  fullName: "Emma Richardson",
  email: "emma.richardson@example.com",
  phone: "+1 (555) 123-4567",
  addressLine: "123 Maple Street, Apartment 4B",
  city: "Brooklyn",
  district: "Kings County",
  postalCode: "11201",
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const LOGIN_ROUTE = "/login";
const AUTH_KEYS = ["owlhome_auth", "isLoggedIn"];
const ACCOUNT_KEY = "owlhome_account";

function hasAuth() {
  return AUTH_KEYS.some((key) => localStorage.getItem(key) === "true") || Boolean(localStorage.getItem("owlhome_user"));
}

function getStoredAccount() {
  const stored = localStorage.getItem(ACCOUNT_KEY) || localStorage.getItem("owlhome_user");

  if (!stored) {
    return defaultAccount;
  }

  try {
    return { ...defaultAccount, ...JSON.parse(stored) } as AccountData;
  } catch {
    return defaultAccount;
  }
}

export function AccountPageClient() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<AccountNavItem>("ACCOUNT INFORMATION");
  const [account, setAccount] = useState<AccountData>(defaultAccount);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    if (!hasAuth()) {
      router.replace(LOGIN_ROUTE);
      return;
    }

    setAccount(getStoredAccount());
    setMounted(true);
  }, [router]);

  const saveAccount = (nextAccount: AccountData) => {
    const savedAccount = {
      ...nextAccount,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };

    localStorage.setItem(ACCOUNT_KEY, JSON.stringify(savedAccount));
    setAccount(savedAccount);
  };

  const confirmLogout = () => {
    localStorage.removeItem("owlhome_auth");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("owlhome_user");
    localStorage.removeItem(ACCOUNT_KEY);
    setShowLogoutModal(false);
    router.replace(LOGIN_ROUTE);
  };

  const handleSelectTab = (item: AccountNavItem) => {
    if (item === "LOGOUT") {
      setActiveTab("LOGOUT");
      setShowLogoutModal(true);
      return;
    }

    setActiveTab(item);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <header className="bg-white border-b border-black/10">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-3 text-[11px] uppercase tracking-[0.12em] md:text-xs">
          <div className="flex items-center gap-4">
            <Link href="/menu" className="inline-flex items-center gap-1 hover:opacity-60">
              <Menu className="h-3.5 w-3.5" /><span className="hidden md:inline">Menu</span>
            </Link>
            <Link href="/about" className="hidden md:inline hover:opacity-60">About</Link>
            <Link href="/search" className="inline-flex items-center gap-1 hover:opacity-60">
              <Search className="h-3.5 w-3.5" /><span className="hidden md:inline">Search</span>
            </Link>
          </div>
          <Link href="/" className="font-serif text-[28px] tracking-[0.18em] md:text-[44px] md:leading-none">OWLHOME</Link>
          <div className="flex items-center gap-4">
            <Link href="/products" className="hidden md:inline hover:opacity-60">Products</Link>
            <Link href="/construction" className="hidden md:inline hover:opacity-60">Construction</Link>
            <CartBadgeLink><ShoppingCart className="h-3.5 w-3.5" /></CartBadgeLink>
            <Link href="/login" className="hover:opacity-60"><User className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </header>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <h1>My Account</h1>
            <p>Manage your personal information</p>
          </div>
        </section>

        <section className={styles.accountShell}>
          <AccountSidebar activeItem={activeTab} onSelect={handleSelectTab} />
          <div className={styles.contentArea}>
            {activeTab === "ACCOUNT INFORMATION" && (
              <AccountInformationForm account={account} onSave={saveAccount} />
            )}
            {activeTab === "ORDERS" && <OrdersPanel />}
            {activeTab === "WISHLIST" && <WishlistPanel />}
            {activeTab === "SETTINGS" && <SettingsPanel />}
          </div>
        </section>
      </main>

      {showLogoutModal && <LogoutConfirmModal onCancel={() => setShowLogoutModal(false)} onConfirm={confirmLogout} />}
    </>
  );
}
