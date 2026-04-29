"use client";

import { useRouter } from "next/navigation";
import { AuthPage } from "../src/components/AuthPage";
import { Header } from "../src/components/Header";
import type { AccountData, AuthPayload } from "../src/types";

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

export function LoginClient() {
  const router = useRouter();

  const handleAuthenticate = (_payload: AuthPayload) => {
    localStorage.setItem("owlhome_auth", "true");
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("owlhome_account", JSON.stringify(defaultAccount));
    router.replace("/account");
  };

  return (
    <>
      <Header onAccountClick={() => router.push("/account")} />
      <main>
        <AuthPage onAuthenticate={handleAuthenticate} />
      </main>
    </>
  );
}
