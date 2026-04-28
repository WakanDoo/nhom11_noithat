"use client";

import { useMemo, useState } from "react";
import { CategoryToolbar } from "@/components/category-toolbar";
import { ProductSidebar } from "@/components/product-sidebar";
import { ThreeScene } from "@/components/three-scene";
import { TotalPill } from "@/components/total-pill";
import type { Category, Product, Room } from "@/types/shop";

type RoomProductSelectorProps = {
  room: Room;
  category: Category;
  products: Product[];
};

export function RoomProductSelector({ room, category, products }: RoomProductSelectorProps) {
  const [selectedItem, setSelectedItem] = useState<Product | undefined>(products[0]);
  const [focusKey, setFocusKey] = useState(0);

  const sceneProducts = useMemo(() => (selectedItem ? [selectedItem] : []), [selectedItem]);

  function handleSelectItem(product: Product) {
    setSelectedItem(product);
    setFocusKey((current) => current + 1);
  }

  function handleFocusSelectedItem() {
    if (!selectedItem && products[0]) {
      handleSelectItem(products[0]);
      return;
    }
    setFocusKey((current) => current + 1);
  }

  return (
    <section className="flex h-full w-full gap-6 rounded-[20px] bg-[#f7f7f7] p-6 lg:flex-row">
      <div className="relative flex-1 overflow-hidden rounded-[20px]">
        <ThreeScene key={focusKey} products={sceneProducts} />
        <TotalPill total={selectedItem ? selectedItem.price : 0} />
        <CategoryToolbar roomType={room.id} activeCategory={category.id} />
        <button
          type="button"
          onClick={handleFocusSelectedItem}
          className="absolute bottom-[51px] left-1/2 z-20 h-11 w-[168px] -translate-x-1/2 rounded-full bg-[#111] text-[14px] font-medium leading-5 text-white shadow-pill transition hover:bg-black"
        >
          Selected item
        </button>
      </div>
      <ProductSidebar
        room={room}
        roomType={room.id}
        category={category.id}
        products={products}
        selectedProductId={selectedItem?.id}
        onProductSelect={handleSelectItem}
      />
    </section>
  );
}
