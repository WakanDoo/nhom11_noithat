"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const searchResults = products.filter((product) => {
    const searchTerm = query.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.group.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <main className="bg-white">
      <div className="flex min-h-[900px] w-full flex-col items-center px-4 py-20 sm:px-6 lg:px-10">
        <h1 className="mb-12 mt-12 text-center text-[clamp(42px,8vw,64px)] font-light tracking-[0.3em] text-black [font-family:var(--font-cormorant),_serif]">
          SEARCH
        </h1>

        <div className="relative w-full max-w-[1100px]">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-[64px] w-full border border-black px-5 text-[20px] outline-none sm:h-[80px] sm:px-8 sm:text-[24px]"
            aria-label="Search products"
          />

          {query && (
            <div className="mt-12 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {searchResults.map((product) => (
                <div key={product.id} className="w-full min-w-0">
                  <ProductCard product={product} />
                  <p className="mt-2 text-xs uppercase tracking-widest text-gray-400">
                    Category: {product.category}
                  </p>
                </div>
              ))}

              {searchResults.length === 0 && (
                <div className="col-span-full py-10 text-center italic text-gray-400">
                  No products found for &quot;{query}&quot;
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
