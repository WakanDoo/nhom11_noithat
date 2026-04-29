"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
};

const initialItems: CartItem[] = [
  {
    id: "setup-sofa",
    name: "Setup",
    price: 111_000_000,
    image: "/images/products/setup.png",
    quantity: 1,
  },
  {
    id: "bubble-curve-sofa",
    name: "Bubble Curve",
    price: 200_000_000,
    image: "/images/products/bubble-curve.png",
    quantity: 1,
  },
  {
    id: "altea-sofa",
    name: "Altea",
    price: 150_000_000,
    image: "/images/products/altea.png",
    quantity: 1,
  },
];

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (item, quantity = 1) =>
        set((state) => {
          const existingItem = state.items.find((cartItem) => cartItem.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + quantity }
                  : cartItem,
              ),
            };
          }
          return { items: [...state.items, { ...item, quantity }] };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      increaseQuantity: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        })),
      decreaseQuantity: (id) =>
        set((state) => ({
          items: state.items.flatMap((item) => {
            if (item.id !== id) return [item];
            const updatedQuantity = item.quantity - 1;
            return updatedQuantity <= 0 ? [] : [{ ...item, quantity: updatedQuantity }];
          }),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "owlhome-cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
