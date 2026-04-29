"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { cormorant } from "@/src/lib/fonts";

const USD_RATE = 26400;

const formatVnd = (value: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);

const formatUsd = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
    value / USD_RATE,
  );

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[0-9\s\-]{7,15}$/;

function validate(name: string, phone: string, email: string, address: string) {
  const errors: { name?: string; phone?: string; email?: string; address?: string } = {};
  if (!name.trim()) errors.name = "Please enter your full name";
  if (!phone.trim()) errors.phone = "Please enter your phone number";
  else if (!PHONE_RE.test(phone.trim())) errors.phone = "Invalid phone number";
  if (!email.trim()) errors.email = "Please enter your email";
  else if (!EMAIL_RE.test(email.trim())) errors.email = "Invalid email address";
  if (!address.trim()) errors.address = "Please enter your street address";
  return errors;
}

const inputBase =
  "w-full border-b bg-transparent py-3 text-sm outline-none placeholder:text-black/45 transition-colors";
const inputNormal = `${inputBase} border-black/35`;
const inputError = `${inputBase} border-red-500`;

export default function CheckoutPage() {
  const [selectedShipping, setSelectedShipping] = useState<"standard" | "express">("standard");
  const [selectedPayment, setSelectedPayment] = useState<"cod" | "bank" | "ewallet" | null>(null);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string; address?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const { items } = useCartStore();
  const firstItem = items[0];
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = selectedShipping === "express" ? 350000 : 0;
  const total = subtotal + shippingCost;

  const handlePlaceOrder = () => {
    setSubmitted(true);
    const errs = validate(name, phone, email, address);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
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
              className="block bg-black border border-black px-4 py-3 text-[11px] uppercase tracking-[0.15em] text-white transition hover:bg-black/85"
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

      <div className="w-full border border-black/15 bg-white p-3 md:p-5 lg:p-6">
        <div className="grid gap-6 md:grid-cols-[1fr_290px] lg:grid-cols-[1fr_340px]">
          <section className="order-2 md:order-1">
            <h2 className={`${cormorant.className} mb-6 text-[26px] md:text-[40px]`}>
              Checkout
            </h2>

            <div className="mb-7">
              <p className="mb-3 text-[11px] uppercase tracking-[0.13em] text-black/60">Customer Information</p>
              <div className="space-y-3">
                <div>
                  <input
                    className={submitted && errors.name ? inputError : inputNormal}
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (submitted) setErrors((prev) => ({ ...prev, name: !e.target.value.trim() ? "Please enter your full name" : undefined }));
                    }}
                  />
                  {submitted && errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <input
                    className={submitted && errors.phone ? inputError : inputNormal}
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (submitted) setErrors((prev) => ({ ...prev, phone: !e.target.value.trim() ? "Please enter your phone number" : !PHONE_RE.test(e.target.value.trim()) ? "Invalid phone number" : undefined }));
                    }}
                  />
                  {submitted && errors.phone && <p className="mt-1 text-[11px] text-red-500">{errors.phone}</p>}
                </div>
                <div>
                  <input
                    className={submitted && errors.email ? inputError : inputNormal}
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (submitted) setErrors((prev) => ({ ...prev, email: !e.target.value.trim() ? "Please enter your email" : !EMAIL_RE.test(e.target.value.trim()) ? "Invalid email address" : undefined }));
                    }}
                  />
                  {submitted && errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
                </div>
              </div>
            </div>

            <div className="mb-7">
              <p className="mb-3 text-[11px] uppercase tracking-[0.13em] text-black/60">Shipping Address</p>
              <div className="space-y-3">
                <div>
                  <input
                    className={submitted && errors.address ? inputError : inputNormal}
                    placeholder="Street Address"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      if (submitted) setErrors((prev) => ({ ...prev, address: !e.target.value.trim() ? "Please enter your street address" : undefined }));
                    }}
                  />
                  {submitted && errors.address && <p className="mt-1 text-[11px] text-red-500">{errors.address}</p>}
                </div>
                <input className={inputNormal} placeholder="Delivery Note (Optional)" />
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

          <aside className="order-1 h-fit border border-black/15 bg-white p-4 md:order-2 md:sticky md:top-[calc(var(--site-header-height)+1rem)]">
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

      </div>

      <div className="mt-3 w-full px-1 text-center text-xs text-black/55 md:hidden">
        <span>{formatUsd(total)}</span>
      </div>
    </main>
  );
}
