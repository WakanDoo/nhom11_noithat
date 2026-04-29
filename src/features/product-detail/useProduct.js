import { products } from "@/data/products";

export function useProduct(id) {
  const product = products.find((p) => p.id === id);

  const related = products
    .filter(
      (p) =>
        p.category === product?.category &&
        p.id !== product?.id
    )
    .slice(0, 4);

  return { product, related };
}