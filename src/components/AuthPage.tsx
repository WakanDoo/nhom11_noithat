"use client";

import { FormEvent, useState } from "react";
import type { AuthPayload } from "../types";

type AuthPageProps = {
  onAuthenticate: (payload: AuthPayload) => void;
};

export function AuthPage({ onAuthenticate }: AuthPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const mode = (submitter?.value as AuthPayload["mode"]) || "signin";
    onAuthenticate({ email, password, mode });
  };

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

      <div className="grid border-b border-[#111] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-h-[360px] border-b border-[#111] lg:min-h-[620px] lg:border-b-0 lg:border-r">
          <div
            className="h-full min-h-[360px] bg-cover bg-center grayscale"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85')",
            }}
            aria-label="Editorial interior with furniture"
            role="img"
          />
        </div>

        <div className="flex items-center px-0 py-10 sm:px-10 lg:px-14">
          <form className="w-full" onSubmit={submit}>
            <p className="mb-3 text-[11px] uppercase tracking-editorial text-[#666]">Sign In / Sign Up</p>
            <h2 className="mb-10 font-serif text-3xl uppercase tracking-editorial">Welcome Back</h2>
            <div className="space-y-6">
              <label className="block">
                <span className="mb-2 block text-[11px] font-medium uppercase tracking-editorial">Email</span>
                <input
                  className="h-12 w-full border border-[#d6d6d6] bg-white px-4 text-sm transition focus:border-[#111]"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  type="email"
                  value={email}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[11px] font-medium uppercase tracking-editorial">Password</span>
                <input
                  className="h-12 w-full border border-[#d6d6d6] bg-white px-4 text-sm transition focus:border-[#111]"
                  minLength={4}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  type="password"
                  value={password}
                />
              </label>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <button className="h-12 border border-[#111] bg-[#111] px-5 text-[11px] font-semibold uppercase tracking-editorial text-white transition hover:bg-white hover:text-[#111]" type="submit" value="signin">
                Sign In
              </button>
              <button
                className="h-12 border border-[#111] bg-white px-5 text-[11px] font-semibold uppercase tracking-editorial text-[#111] transition hover:bg-[#111] hover:text-white"
                type="submit"
                value="signup"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
