"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { CategoryToolbar } from "@/components/category-toolbar";
import { ProductSidebar } from "@/components/product-sidebar";
import { ThreeScene } from "@/components/three-scene";
import { TotalPill } from "@/components/total-pill";
import { useCart } from "@/components/cart-provider";
import type { Product } from "@/types/shop";
import { getProductsByCategory, getRoom } from "@/data/shop";

export function ProductExperience({ product }: { product: Product }) {
  const [focused, setFocused] = useState(false);
  const [removedCurrentProduct, setRemovedCurrentProduct] = useState(false);
  const { selectedProducts, addProduct, removeProduct, isSelected } = useCart();
  const selected = isSelected(product.id);
  const room = getRoom(product.roomId);
  const products = getProductsByCategory(product.roomId, product.categoryId);

  useEffect(() => {
    addProduct(product);
    setFocused(true);
    setRemovedCurrentProduct(false);
  }, [addProduct, product.id, product]);

  function selectProduct() {
    setRemovedCurrentProduct(false);
    setFocused(true);
    addProduct(product);
  }

  function handleProductRemove(productId: string) {
    if (productId === product.id) {
      setRemovedCurrentProduct(true);
      setFocused(false);
    }
    removeProduct(productId);
  }

  const sceneProducts =
    selected || removedCurrentProduct || selectedProducts.some((selectedProduct) => selectedProduct.id === product.id)
      ? selectedProducts
      : [...selectedProducts, product];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="grid min-h-screen overflow-x-hidden pt-[94px] md:pt-[118px] lg:grid-cols-[minmax(0,974px)_306px] xl:justify-center">
        <div className="dot-grid relative h-[560px] overflow-hidden border-b border-[#f5f5f5] sm:h-[620px] lg:h-[calc(100vh-118px)] lg:min-h-[650px]">
          <div className="absolute left-5 top-[22px] z-20">
            <TotalPill />
          </div>
          <ThreeScene
            products={sceneProducts}
            activeProductId={removedCurrentProduct ? selectedProducts[0]?.id : product.id}
            focused={focused && !removedCurrentProduct}
            selected={selected}
            onProductSelect={addProduct}
            onProductRemove={handleProductRemove}
          />
          <CategoryToolbar roomType={product.roomId} activeCategory={product.categoryId} />
          <button
            onClick={selectProduct}
            className="absolute bottom-[51px] left-1/2 z-20 h-11 w-[168px] -translate-x-1/2 rounded-full bg-[#111] text-[14px] font-medium leading-5 text-white shadow-pill transition hover:bg-black"
          >
            {selected ? "Focus product" : "Select product"}
          </button>
        </div>
        {room ? (
          <ProductSidebar
            room={room}
            roomType={product.roomId}
            category={product.categoryId}
            products={products}
            selectedProductId={product.id}
          />
        ) : null}
      </section>
    </main>
  );
}
