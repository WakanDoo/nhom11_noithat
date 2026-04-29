"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

const SHIPPING_LABEL = "Complimentary";
const formatVnd = (value: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);

export default function CartPage() {
  const { items, increaseQuantity, decreaseQuantity, removeItem } = useCartStore();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-white px-3 py-3 text-black md:px-4 md:py-5 lg:px-8">
      <div className="w-full rounded-sm border border-black/15 bg-white p-3 md:p-5 lg:p-6">
        <h2 className="mb-3 text-[26px] font-semibold leading-none md:mb-6 md:text-[36px]">Shopping Cart</h2>

        <div className="grid gap-4 md:grid-cols-[1fr_320px] lg:gap-6">
          <section className="rounded-sm border border-black/15 bg-white p-3 md:p-6">
            <div className="mb-3 hidden items-center border-b border-black/15 pb-4 text-sm font-semibold md:grid md:grid-cols-[1.6fr_1fr_1fr]">
              <p>Product</p>
              <p>Quantity</p>
              <p>Total Price</p>
            </div>

            <AnimatePresence initial={false}>
              {items.map((item) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 24, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="mb-3 rounded-sm border border-black/10 bg-white p-2 md:mb-0 md:rounded-none md:border-x-0 md:border-t-0 md:bg-transparent md:px-0 md:py-4"
                >
                  <div className="flex items-center gap-3 md:grid md:grid-cols-[1.6fr_1fr_1fr]">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="h-[62px] w-[88px] overflow-hidden rounded-sm border border-black/30 bg-white md:h-[74px] md:w-[96px]">
                        <Image src={item.image} alt={item.name} width={192} height={148} className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-base md:text-lg">{item.name}</p>
                        <p className="text-xs text-black/70 md:hidden">{formatVnd(item.price * item.quantity)}</p>
                      </div>
                    </div>

                    <div className="ml-auto flex items-center gap-2 md:ml-0">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="inline-flex h-5 w-5 items-center justify-center rounded-[3px] border border-black/25 text-black"
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-4 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="inline-flex h-5 w-5 items-center justify-center rounded-[3px] border border-black/25 text-black"
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    <div className="hidden items-center justify-between text-sm md:flex">
                      <p>{formatVnd(item.price * item.quantity)}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-black/50 transition hover:text-black"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-2 ml-auto flex text-black/50 md:hidden"
                    aria-label={`Remove ${item.name}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </motion.article>
              ))}
            </AnimatePresence>

            <div className="mt-2 flex justify-between border-t border-black/15 pt-3 text-xs md:text-sm">
              <span>Subtotal:</span>
              <span>{formatVnd(subtotal)}</span>
            </div>
            <div className="mt-6 flex justify-between border-t border-black/20 pt-3 text-[32px] font-semibold leading-none md:text-[38px]">
              <span>Total:</span>
              <span className="text-[28px] md:text-[36px]">{formatVnd(subtotal)}</span>
            </div>
          </section>

          <aside className="rounded-sm border border-black/15 bg-white p-5">
            <h3 className="mb-6 text-center font-serif text-[28px]">Order Summary</h3>
            <div className="space-y-3 border-b border-black/15 pb-6 text-sm">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>{formatVnd(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>{SHIPPING_LABEL}</span>
              </div>
            </div>
            <div className="mt-5 mb-6 flex items-center justify-between text-2xl">
              <span>Total</span>
              <span>{formatVnd(subtotal)}</span>
            </div>
            <Link
              href="/checkout"
              className="mb-3 block bg-white border border-black px-4 py-3 text-center text-[11px] uppercase tracking-[0.15em] text-white transition hover:bg-white/85 hover:text-black">
              Proceed to checkout
            </Link>
            <Link
              href="/"
              className="block border border-black px-4 py-3 text-center text-[11px] uppercase tracking-[0.15em]"
            >
              Continue shopping
            </Link>
            <ul className="mt-5 space-y-2 border-t border-black/15 pt-5 text-[11px] text-black/65">
              <li>- Complimentary shipping on orders over $500</li>
              <li>- 30-day hassle-free returns</li>
              <li>- White glove delivery service available</li>
            </ul>
          </aside>
        </div>
      </div>
    </main>
  );
}
