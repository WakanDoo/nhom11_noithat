"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ShoppingBag, Trash2 } from "lucide-react";
import { Header } from "@/components/header";
import { useCart } from "@/components/cart-provider";
import { formatVnd } from "@/lib/format";

export default function CheckoutPage() {
  const { selectedProducts, total, removeProduct } = useCart();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="mx-auto flex w-full max-w-[1180px] flex-col gap-8 px-5 pb-16 pt-[118px] lg:pt-[145px]">
        <Link href="/" className="inline-flex w-fit items-center gap-2 text-[14px] font-medium text-[#111]">
          <ArrowLeft className="h-4 w-4" />
          Back to 3D room
        </Link>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <section>
            <h1 className="font-serifBrand text-[46px] font-medium leading-none tracking-[0.08em] text-[#111]">CHECKOUT</h1>
            <p className="mt-3 max-w-[540px] text-[15px] leading-6 text-[#777]">
              Review the products selected from the 3D interior experience.
            </p>

            <div className="mt-8 overflow-hidden rounded-[20px] border border-[#e5e5e5] bg-white">
              {selectedProducts.length === 0 ? (
                <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 p-8 text-center">
                  <ShoppingBag className="h-10 w-10 text-[#777]" />
                  <p className="text-[18px] font-medium text-[#111]">No selected products yet</p>
                  <Link href="/" className="rounded-full bg-[#111] px-6 py-3 text-[14px] font-medium text-white">
                    Explore rooms
                  </Link>
                </div>
              ) : (
                <ul className="divide-y divide-[#e5e5e5]">
                  {selectedProducts.map((product) => (
                    <li key={product.id} className="grid gap-4 p-4 sm:grid-cols-[128px_minmax(0,1fr)_auto] sm:items-center">
                      <div className="relative h-[92px] overflow-hidden rounded-[14px] bg-[#f7f7f7]">
                        <Image src={product.image} alt={product.name} fill sizes="128px" className="object-cover" />
                      </div>
                      <div>
                        <p className="text-[18px] font-medium leading-7 text-[#111]">{product.name}</p>
                        <p className="mt-1 max-w-[520px] text-[14px] leading-6 text-[#777]">{product.description}</p>
                        <p className="mt-2 text-[15px] font-medium text-[#111]">{formatVnd(product.price)}</p>
                      </div>
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="grid h-10 w-10 place-items-center rounded-full border border-[#e5e5e5] text-[#111] transition hover:bg-[#f7f7f7]"
                        aria-label={`Remove ${product.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          <aside className="h-fit rounded-[20px] border border-[#e5e5e5] bg-[#fbfbfb] p-6">
            <h2 className="text-[20px] font-medium text-[#111]">Order summary</h2>
            <div className="mt-6 flex items-center justify-between border-b border-[#e5e5e5] pb-4 text-[15px] text-[#777]">
              <span>{selectedProducts.length} products</span>
              <span>{formatVnd(total)}</span>
            </div>
            <div className="mt-5 flex items-center justify-between text-[18px] font-medium text-[#111]">
              <span>Total</span>
              <span>{formatVnd(total)}</span>
            </div>
            <div className="mt-8 grid gap-3">
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#111] bg-white px-5 text-[14px] font-medium text-[#111] transition hover:bg-[#f7f7f7]">
                <ShoppingBag className="h-4 w-4" />
                Add to Cart
              </button>
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#111] px-5 text-[14px] font-medium text-white transition hover:bg-black">
                <Check className="h-4 w-4" />
                Checkout
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
