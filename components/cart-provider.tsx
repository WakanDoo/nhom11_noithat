"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { products } from "@/data/shop";
import type { Product } from "@/types/shop";

type CartContextValue = {
  selectedIds: string[];
  selectedProducts: Product[];
  total: number;
  isSelected: (id: string) => boolean;
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  clearProducts: () => void;
  getTotalPrice: () => number;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "owlhome:selected-products";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      const parsed = JSON.parse(stored) as string[];
      const cleaned = parsed.reduce<string[]>((nextIds, id) => {
        const product = products.find((item) => item.id === id);
        if (!product || nextIds.some((nextId) => products.find((item) => item.id === nextId)?.categoryId === product.categoryId)) {
          return nextIds;
        }
        return [...nextIds, id];
      }, []);
      setSelectedIds(cleaned);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(selectedIds));
  }, [selectedIds]);

  const selectedProducts = useMemo(
    () => selectedIds.map((id) => products.find((product) => product.id === id)).filter(Boolean) as Product[],
    [selectedIds]
  );

  const isSelected = useCallback((id: string) => selectedIds.includes(id), [selectedIds]);
  const addProduct = useCallback((product: Product) => {
    setSelectedIds((current) => {
      if (current.includes(product.id)) return current;
      const withoutSameCategory = current.filter((id) => {
        const currentProduct = products.find((item) => item.id === id);
        return currentProduct?.categoryId !== product.categoryId;
      });
      return [...withoutSameCategory, product.id];
    });
  }, []);
  const removeProduct = useCallback((id: string) => {
    setSelectedIds((current) => current.filter((productId) => productId !== id));
  }, []);
  const clearProducts = useCallback(() => setSelectedIds([]), []);
  const getTotalPrice = useCallback(
    () => selectedProducts.reduce((sum, product) => sum + product.price, 0),
    [selectedProducts]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      selectedIds,
      selectedProducts,
      total: selectedProducts.reduce((sum, product) => sum + product.price, 0),
      isSelected,
      addProduct,
      removeProduct,
      clearProducts,
      getTotalPrice,
      clearCart: clearProducts
    }),
    [addProduct, clearProducts, getTotalPrice, isSelected, removeProduct, selectedIds, selectedProducts]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
