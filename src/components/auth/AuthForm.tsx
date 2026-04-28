"use client";

import { useState } from "react";

import AuthTabs from "./AuthTabs";
import LoginForm, { type LoginValues } from "./LoginForm";
import RegisterForm, { type RegisterValues } from "./RegisterForm";

type AuthTab = "signin" | "signup";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialLoginValues: LoginValues = {
  email: "",
  password: "",
  remember: false,
};

const initialRegisterValues: RegisterValues = {
  confirmPassword: "",
  email: "",
  fullName: "",
  password: "",
};

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState<AuthTab>("signin");
  const [loginValues, setLoginValues] = useState<LoginValues>(initialLoginValues);
  const [registerValues, setRegisterValues] = useState<RegisterValues>(initialRegisterValues);
  const [loginErrors, setLoginErrors] = useState<Partial<Record<keyof LoginValues, string>>>({});
  const [registerErrors, setRegisterErrors] = useState<Partial<Record<keyof RegisterValues, string>>>({});

  const handleTabChange = (tab: AuthTab) => {
    setActiveTab(tab);

    if (tab === "signin") {
      setRegisterErrors({});
      return;
    }

    setLoginErrors({});
  };

  const handleLoginChange = <K extends keyof LoginValues>(field: K, value: LoginValues[K]) => {
    setLoginValues((current) => ({ ...current, [field]: value }));
    setLoginErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleRegisterChange = <K extends keyof RegisterValues>(
    field: K,
    value: RegisterValues[K]
  ) => {
    setRegisterValues((current) => ({ ...current, [field]: value }));
    setRegisterErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validateLogin = () => {
    const nextErrors: Partial<Record<keyof LoginValues, string>> = {};

    if (!loginValues.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(loginValues.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!loginValues.password.trim()) {
      nextErrors.password = "Password is required.";
    }

    setLoginErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validateRegister = () => {
    const nextErrors: Partial<Record<keyof RegisterValues, string>> = {};

    if (!registerValues.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!registerValues.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(registerValues.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!registerValues.password.trim()) {
      nextErrors.password = "Password is required.";
    }

    if (!registerValues.confirmPassword.trim()) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (registerValues.password !== registerValues.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    setRegisterErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateLogin()) {
      return;
    }

    console.log("Login payload", loginValues);
  };

  const handleRegisterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateRegister()) {
      return;
    }

    console.log("Register payload", registerValues);
  };

  return (
    <div className="w-full max-w-full rounded-4xl border border-white/55 bg-white/70 p-6 shadow-[0_30px_80px_rgba(32,24,18,0.18)] backdrop-blur-2xl sm:max-w-125 sm:p-8 lg:max-w-135 lg:p-10">
      <div className="mb-8 text-center">
        <p className="font-(family-name:--font-brand-serif) text-[2.7rem] tracking-[0.24em] text-[#28211c] sm:text-[3rem]">
          OWLHOME
        </p>
        <div className="mx-auto mt-4 h-px w-24 bg-[#c9a96e]" />
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.38em] text-[#6d6255]">
          Make it yours
        </p>
      </div>

      <AuthTabs activeTab={activeTab} onChange={handleTabChange} />

      <div className="overflow-hidden">
        <div
          className={`flex w-[200%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            activeTab === "signin" ? "translate-x-0" : "-translate-x-1/2"
          }`}
        >
          <div className="w-1/2 shrink-0 pr-0 sm:pr-4">
            <LoginForm
              errors={loginErrors}
              values={loginValues}
              onChange={handleLoginChange}
              onSubmit={handleLoginSubmit}
              onSwitch={() => handleTabChange("signup")}
            />
          </div>

          <div className="w-1/2 shrink-0 pl-0 sm:pl-4">
            <RegisterForm
              errors={registerErrors}
              values={registerValues}
              onChange={handleRegisterChange}
              onSubmit={handleRegisterSubmit}
              onSwitch={() => handleTabChange("signin")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
