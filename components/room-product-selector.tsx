"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/components/cart-provider";
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
  const [focused, setFocused] = useState(false);
  const { selectedProducts, selectedByType, addProduct } = useCart();

  const activeProduct = selectedByType[category.id];
  const sceneProducts = useMemo(() => {
    return selectedProducts.filter((product) => product.roomId === room.id);
  }, [room.id, selectedProducts]);

  function handleSelectItem(product: Product) {
    addProduct(product);
  }

  function handleFocusSelectedItem() {
    setFocused(true);
  }

  return (
    <section className="grid min-h-[100svh] grid-rows-[minmax(0,1fr)_auto] overflow-x-hidden pt-[94px] md:pt-[118px] lg:min-h-screen lg:grid-cols-[minmax(0,974px)_306px] lg:grid-rows-none xl:justify-center">
      <div className="dot-grid relative h-[calc(100svh-94px-252px)] min-h-[330px] overflow-hidden border-b border-[#f5f5f5] sm:h-[420px] md:h-[calc(100svh-118px-320px)] md:min-h-[380px] lg:h-[calc(100vh-118px)] lg:min-h-[650px]">
        <div className="absolute left-5 top-[22px] z-20">
          <TotalPill />
        </div>
        <ThreeScene
          products={sceneProducts}
          activeProductId={activeProduct?.id}
          focused={focused}
          selected={Boolean(activeProduct)}
          onProductSelect={handleSelectItem}
        />
        <CategoryToolbar roomType={room.id} activeCategory={category.id} />
        <button
          type="button"
          onClick={handleFocusSelectedItem}
          className="absolute bottom-[51px] left-1/2 z-20 h-11 w-[168px] -translate-x-1/2 rounded-full bg-[#111] text-[14px] font-medium leading-5 text-white shadow-pill transition hover:bg-black"
        >
          Focus room
        </button>
      </div>
      <ProductSidebar
        room={room}
        roomType={room.id}
        category={category.id}
        products={products}
        selectedProductId={activeProduct?.id}
        onProductSelect={handleSelectItem}
      />
    </section>
  );
}
