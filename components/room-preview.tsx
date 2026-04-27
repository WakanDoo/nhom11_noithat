"use client";

import { useCart } from "@/components/cart-provider";
import { ThreeScene } from "@/components/three-scene";

export function RoomPreview() {
  const { selectedProducts, selectedIds, addProduct, removeProduct } = useCart();

  return (
    <ThreeScene
      products={selectedProducts}
      activeProductId={selectedIds[0]}
      focused={false}
      selected={false}
      onProductSelect={addProduct}
      onProductRemove={removeProduct}
    />
  );
}
