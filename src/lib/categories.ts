// lib/categories.ts
export interface Product {
  id: string;
  name: string;
  label: string;
  title: string;
  price: number;
  image: string;
  category: string;
  categorySlug: string;
}

export const categories = [
  { slug: 'livingroom', name: 'Living Room' },
  { slug: 'bedroom', name: 'Bedroom' },
  // Add more categories
];

export const categoryMap: Record<string, { name: string; breadcrumbLabel: string; heading: string; description: string; products: Product[] }> = {
  livingroom: {
    name: 'Living Room',
    breadcrumbLabel: 'Living Room',    heading: 'Living Room Furniture',
    description: 'Comfortable and stylish furniture for your living space.',    products: [
      { id: '1', name: 'Sofa', label: 'Sofa', title: 'Comfortable Sofa', price: 1000, image: '/sofa.jpg', category: 'livingroom', categorySlug: 'livingroom' },
      // Add more products
    ],
  },
  // Add more categories
};

export const allProducts: Product[] = [
  // Combine all products from categoryMap
  ...Object.values(categoryMap).flatMap(cat => cat.products),
];