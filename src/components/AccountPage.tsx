import { useState } from "react";
import type { AccountData } from "../types";
import { AccountForm } from "./AccountForm";
import { AccountNav } from "./AccountNav";
import { LogoutModal } from "./LogoutModal";

type AccountPageProps = {
  account: AccountData;
  onSave: (account: AccountData) => void;
  onLogout: () => void;
};

export function AccountPage({ account, onSave, onLogout }: AccountPageProps) {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="border-b border-[#111] pb-8 sm:pb-10">
        <p className="mb-3 text-[11px] uppercase tracking-editorial text-[#666]">Account</p>
        <h1 className="font-serif text-5xl uppercase leading-none tracking-editorial sm:text-6xl lg:text-7xl">
          My Account
        </h1>
        <p className="mt-4 max-w-xl text-sm uppercase tracking-editorial text-[#555]">
          Manage your personal information
        </p>
      </div>

      <div className="grid lg:grid-cols-[260px_1fr]">
        <AccountNav onLogout={() => setShowLogout(true)} />
        <AccountForm account={account} onSave={onSave} />
      </div>

      {showLogout && (
        <LogoutModal
          onCancel={() => setShowLogout(false)}
          onConfirm={() => {
            setShowLogout(false);
            onLogout();
          }}
        />
      )}
    </section>
  );
}
