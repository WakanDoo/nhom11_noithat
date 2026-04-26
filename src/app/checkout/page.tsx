"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/useCartStore";

const USD_RATE = 26400;

const formatVnd = (value: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);

const formatUsd = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
    value / USD_RATE,
  );

const inputStyle =
  "w-full border-b border-black/35 bg-transparent py-3 text-sm outline-none placeholder:text-black/45";

export default function CheckoutPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { items } = useCartStore();
  const firstItem = items[0];
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white px-3 py-3 text-black md:px-4 md:py-5 lg:px-8">
      <header
        className={`fixed top-0 right-0 left-0 z-50 bg-white transition-shadow duration-200 ${
          isScrolled ? "shadow-[0_2px_10px_rgba(0,0,0,0.12)]" : ""
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between border-x border-b border-black/15 px-3 py-3 text-[11px] uppercase tracking-[0.12em] md:px-5 md:py-4 md:text-xs lg:px-6">
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-1">
              <Menu className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Menu</span>
            </button>
            <span className="hidden md:inline">About</span>
            <button className="inline-flex items-center gap-1">
              <Search className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Search</span>
            </button>
          </div>
          <h1 className="font-serif text-xl tracking-[0.2em] md:text-[46px] md:leading-none">OWLHOME</h1>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline">Products</span>
            <span className="hidden md:inline">Construction</span>
            <ShoppingCart className="h-3.5 w-3.5" />
            <User className="h-3.5 w-3.5" />
          </div>
        </div>
      </header>

      <div className="h-[68px] md:h-[90px]" />

      <div className="mx-auto w-full max-w-[1280px] border border-black/15 bg-white p-3 md:p-5 lg:p-6">
        <div className="grid gap-6 md:grid-cols-[1fr_290px] lg:grid-cols-[1fr_340px]">
          <section className="order-2 md:order-1">
            <h2 className="mb-6 text-[26px] md:text-[40px]">Checkout</h2>

            <div className="mb-7">
              <p className="mb-3 text-[11px] uppercase tracking-[0.13em] text-black/60">Customer Information</p>
              <div className="space-y-3">
                <input className={inputStyle} placeholder="Full Name" />
                <input className={inputStyle} placeholder="Phone Number" />
                <input className={inputStyle} placeholder="Email Address" />
              </div>
            </div>

            <div className="mb-7">
              <p className="mb-3 text-[11px] uppercase tracking-[0.13em] text-black/60">Shipping Address</p>
              <div className="space-y-3">
                <input className={inputStyle} placeholder="Street Address" />
                <input className={inputStyle} placeholder="Delivery Note (Optional)" />
              </div>
            </div>

            <div className="mb-7">
              <p className="mb-3 text-[11px] uppercase tracking-[0.13em] text-black/60">Shipping Method</p>
              <div className="space-y-2">
                <label className="flex cursor-pointer items-center justify-between border border-black/20 bg-white px-4 py-3 text-sm">
                  <span>Standard Delivery (5-7 business days)</span>
                  <span>Free</span>
                </label>
                <label className="flex cursor-pointer items-center justify-between border border-black/20 bg-white px-4 py-3 text-sm">
                  <span>Express Delivery (1-2 business days)</span>
                  <span>{formatVnd(350000)}</span>
                </label>
              </div>
            </div>

            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.13em] text-black/60">Payment Method</p>
              <div className="space-y-2">
                <button className="w-full border border-black/20 px-4 py-3 text-left text-sm">Cash on Delivery</button>
                <button className="w-full border border-black/20 px-4 py-3 text-left text-sm">Bank Transfer</button>
                <button className="w-full border border-black/20 px-4 py-3 text-left text-sm">E-Wallet</button>
              </div>
            </div>
          </section>

          <aside className="order-1 h-fit border border-black/15 bg-white p-4 md:order-2 md:sticky md:top-4">
            <h3 className="mb-4 text-center font-serif text-[30px]">Order Summary</h3>
            {firstItem ? (
              <div className="mb-4 flex items-center gap-3 border-b border-black/15 pb-4">
                <div className="h-[56px] w-[56px] overflow-hidden border border-black/30 bg-white">
                  <Image src={firstItem.image} alt={firstItem.name} width={112} height={112} className="h-full w-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm">{firstItem.name}</p>
                  <p className="text-xs text-black/70">{formatVnd(firstItem.price * firstItem.quantity)}</p>
                </div>
              </div>
            ) : (
              <p className="mb-4 border-b border-black/15 pb-4 text-sm text-black/70">Your cart is currently empty.</p>
            )}
            <div className="space-y-3 border-b border-black/15 pb-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatVnd(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : formatVnd(shipping)}</span>
              </div>
            </div>
            <div className="my-4 flex items-center justify-between text-xl">
              <span>Total</span>
              <span>{formatVnd(total)}</span>
            </div>
            <button className="w-full bg-black px-4 py-3 text-[11px] uppercase tracking-[0.15em] text-white transition hover:bg-black/85">
              Place order
            </button>
            <p className="mt-3 text-center text-[11px] text-black/55">Secure payment. Your data is encrypted.</p>
          </aside>
        </div>

        <footer className="mt-10 border-t border-black/20 pt-4 text-[10px] uppercase tracking-[0.11em] text-black/80 md:flex md:items-center md:justify-between">
          <div className="mb-2 flex flex-wrap gap-x-3 gap-y-1 md:mb-0">
            <Link href="#">Contact</Link>
            <Link href="#">All Stores</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Policy</Link>
          </div>
          <p>owlhome@gmail.com</p>
        </footer>
      </div>

      <div className="mx-auto mt-3 w-full max-w-[1280px] px-1 text-center text-xs text-black/55 md:hidden">
        <span>{formatUsd(total)}</span>
      </div>
    </main>
  );
}
