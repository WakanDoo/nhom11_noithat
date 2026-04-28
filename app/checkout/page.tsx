"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Menu, Search, ShoppingCart, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { CartBadgeLink } from "@/components/CartBadgeLink";

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
  const [selectedShipping, setSelectedShipping] = useState<"standard" | "express">("standard");
  const [selectedPayment, setSelectedPayment] = useState<"cod" | "bank" | "ewallet" | null>(null);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const { items } = useCartStore();
  const firstItem = items[0];
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = selectedShipping === "express" ? 350000 : 0;
  const total = subtotal + shippingCost;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePlaceOrder = () => {
    setOrderSuccess(true);
  };

  return (
    <main className="min-h-screen bg-white px-3 py-3 text-black md:px-4 md:py-5 lg:px-8">
      {/* Success Modal */}
      {orderSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div
            className="mx-4 w-full max-w-sm border border-black/15 bg-white p-8 text-center shadow-2xl"
            style={{ animation: "fadeScaleIn 0.3s ease forwards" }}
          >
            <div className="mb-4 flex justify-center">
              <CheckCircle className="h-14 w-14 text-black" strokeWidth={1.2} />
            </div>
            <h2 className="mb-2 font-serif text-2xl tracking-wide">Order Placed!</h2>
            <p className="mb-1 text-sm text-black/60">Thanh toán thành công.</p>
            <p className="mb-6 text-sm text-black/60">Chúng tôi sẽ liên hệ xác nhận đơn hàng sớm nhất.</p>
            <Link
              href="/"
              className="block bg-black px-4 py-3 text-[11px] uppercase tracking-[0.15em] text-white transition hover:bg-black/85"
            >
              Về trang chủ
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeScaleIn {
          from { opacity: 0; transform: scale(0.93); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <header
        className={`fixed top-0 right-0 left-0 z-50 bg-white transition-shadow duration-200 ${
          isScrolled ? "shadow-[0_2px_10px_rgba(0,0,0,0.12)]" : ""
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between border-x border-b border-black/15 px-3 py-3 text-[11px] uppercase tracking-[0.12em] md:px-5 md:py-4 md:text-xs lg:px-6">
          <div className="flex items-center gap-3">
            <Link href="/menu" className="inline-flex items-center gap-1">
              <Menu className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Menu</span>
            </Link>
            <span className="hidden md:inline">About</span>
            <Link href="/search" className="inline-flex items-center gap-1">
              <Search className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Search</span>
            </Link>
          </div>
          <Link href="/" className="font-serif text-xl tracking-[0.2em] md:text-[46px] md:leading-none">OWLHOME</Link>
          <div className="flex items-center gap-3">
            <Link href="/products" className="hidden md:inline">Products</Link>
            <Link href="/construction" className="hidden md:inline">Construction</Link>
            <CartBadgeLink><ShoppingCart className="h-3.5 w-3.5" /></CartBadgeLink>
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
                {[
                  { id: "standard", label: "Standard Delivery (5-7 business days)", price: "Free" },
                  { id: "express", label: "Express Delivery (1-2 business days)", price: formatVnd(350000) },
                ].map(({ id, label, price }) => (
                  <button
                    key={id}
                    onClick={() => setSelectedShipping(id as "standard" | "express")}
                    className={`flex w-full cursor-pointer items-center justify-between px-4 py-3 text-sm transition-all duration-150 ${
                      selectedShipping === id
                        ? "border border-black bg-black text-white"
                        : "border border-black/20 bg-white text-black hover:border-black/50"
                    }`}
                  >
                    <span>{label}</span>
                    <span>{price}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.13em] text-black/60">Payment Method</p>
              <div className="space-y-2">
                {[
                  { id: "cod", label: "Cash on Delivery" },
                  { id: "bank", label: "Bank Transfer" },
                  { id: "ewallet", label: "E-Wallet" },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setSelectedPayment(id as "cod" | "bank" | "ewallet")}
                    className={`w-full px-4 py-3 text-left text-sm transition-all duration-150 ${
                      selectedPayment === id
                        ? "border border-black bg-black text-white"
                        : "border border-black/20 bg-white text-black hover:border-black/50"
                    }`}
                  >
                    {label}
                  </button>
                ))}
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
                <span>{shippingCost === 0 ? "Free" : formatVnd(shippingCost)}</span>
              </div>
            </div>
            <div className="my-4 flex items-center justify-between text-xl">
              <span>Total</span>
              <span>{formatVnd(total)}</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-black px-4 py-3 text-[11px] uppercase tracking-[0.15em] text-white transition hover:bg-black/85 active:scale-[0.98]"
            >
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