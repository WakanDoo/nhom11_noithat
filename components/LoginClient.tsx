"use client";

import { useRouter } from "next/navigation";
import { AuthPage } from "../src/components/AuthPage";
import { Header } from "../src/components/Header";
import type { AccountData, AuthPayload } from "../src/types";

const defaultAccount: AccountData = {
  fullName: "Emma Richardson",
  email: "emma.richardson@example.com",
  phone: "+84 123 456 789",
  addressLine: "1 Vo Van Ngan Street, Thu Duc District",
  city: "Ho Chi Minh City",
  district: "Thu Duc District",
  postalCode: "700000",
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
