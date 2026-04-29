import { useState } from "react";
import type { AccountData } from "../types";
import { AccountInformationForm } from "./AccountInformationForm";
import { AccountSidebar } from "./AccountSidebar";
import { LogoutConfirmModal } from "./LogoutConfirmModal";

type AccountInformationPageProps = {
  account: AccountData;
  onSave: (account: AccountData) => void;
  onLogout: () => void;
};

export function AccountInformationPage({ account, onSave, onLogout }: AccountInformationPageProps) {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <>
      <section className="border-b border-black/10">
        <div className="mx-auto flex min-h-[190px] max-w-[1280px] flex-col justify-center px-6 py-12 sm:px-12 lg:min-h-[217px] lg:px-16">
          <h1 className="font-serif text-[38px] font-medium uppercase leading-[1.2] tracking-[0.15em] sm:text-[44px] lg:text-[40px]">
            My Account
          </h1>
          <p className="mt-6 text-[11px] uppercase leading-none tracking-[0.12em] text-black">
            Manage your personal information
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1152px] gap-10 px-6 py-9 sm:px-10 lg:grid-cols-[256px_1fr] lg:gap-16 lg:px-0">
        <AccountSidebar activeItem="ACCOUNT INFORMATION" onLogout={() => setShowLogout(true)} />
        <AccountInformationForm account={account} onSave={onSave} />
      </section>

      {showLogout && (
        <LogoutConfirmModal
          onCancel={() => setShowLogout(false)}
          onConfirm={() => {
            setShowLogout(false);
            onLogout();
          }}
        />
      )}
    </>
  );
}
