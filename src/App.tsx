import { useEffect, useState } from "react";
import { AccountInformationPage } from "./components/AccountInformationPage";
import { AuthPage } from "./components/AuthPage";
import { Header } from "./components/Header";
import type { AccountData, AuthPayload } from "./types";

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

const AUTH_KEY = "owlhome_user";
const LEGACY_AUTH_KEY = "isLoggedIn";

function getStoredAccount(): AccountData | null {
  const stored = localStorage.getItem(AUTH_KEY);

  if (!stored && localStorage.getItem(LEGACY_AUTH_KEY) !== "true") {
    return null;
  }

  if (!stored) {
    return defaultAccount;
  }

  try {
    return { ...defaultAccount, ...JSON.parse(stored) } as AccountData;
  } catch {
    return defaultAccount;
  }
}

function navigate(path: "/account" | "/login") {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [account, setAccount] = useState<AccountData>(() => getStoredAccount() || defaultAccount);
  const isAuthenticated = getStoredAccount() !== null;

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (!isAuthenticated && path !== "/login") {
      navigate("/login");
    }

    if (isAuthenticated && (path === "/" || path === "/login")) {
      navigate("/account");
    }
  }, [isAuthenticated, path]);

  const handleAuthenticate = (_payload: AuthPayload) => {
    const nextAccount = {
      ...defaultAccount,
    };

    localStorage.setItem(AUTH_KEY, JSON.stringify(nextAccount));
    localStorage.setItem(LEGACY_AUTH_KEY, "true");
    setAccount(nextAccount);
    navigate("/account");
  };

  const handleSave = (nextAccount: AccountData) => {
    const savedAccount = {
      ...nextAccount,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };

    localStorage.setItem(AUTH_KEY, JSON.stringify(savedAccount));
    setAccount(savedAccount);
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(LEGACY_AUTH_KEY);
    setAccount(defaultAccount);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white text-[#111]">
      <Header onAccountClick={() => navigate(isAuthenticated ? "/account" : "/login")} />
      <main>
        {isAuthenticated && path !== "/login" ? (
          <AccountInformationPage account={account} onSave={handleSave} onLogout={handleLogout} />
        ) : (
          <AuthPage onAuthenticate={handleAuthenticate} />
        )}
      </main>
    </div>
  );
}
