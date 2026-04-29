// lib/categories.ts
export interface Product {
  id: string;
  name: string;
  label?: string;
  title?: string;
  description?: string;
  price: number;
  image: string;
  category: string;
  categorySlug?: string;
}

export const categories = [
  { slug: 'livingroom', name: 'Living Room' },
  { slug: 'bedroom', name: 'Bedroom' },
  { slug: 'sofa', name: 'Sofa' },
  { slug: 'tables-chairs', name: 'Tables & Chairs' },
  { slug: 'tv-cabinets', name: 'TV Cabinets & Consoles' },
  { slug: 'office', name: 'Desk' },
  { slug: 'office-chairs', name: 'Office Chairs' },
  { slug: 'bookshelf', name: 'Bookshelf' },
  { slug: 'dining-table-chairs', name: 'Dining Table & Chairs' },
  { slug: 'bed', name: 'Bed' },
  { slug: 'wardrobe', name: 'Wardrobe' },
  { slug: 'bath', name: 'Bathtub' },
  { slug: 'mirror', name: 'Mirror' },
];

export const categoryMap: Record<string, { name: string; breadcrumbLabel: string; heading: string; description: string; products: Product[] }> = {
  livingroom: {
    name: 'Living Room',
    breadcrumbLabel: 'Living Room',
    heading: 'Living Room Furniture',
    description: 'Comfortable and stylish furniture for your living space.',
    products: [
      { id: '1', name: 'Sofa', label: 'Sofa', title: 'Comfortable Sofa', price: 1000, image: '/sofa.jpg', category: 'livingroom', categorySlug: 'livingroom' },
    ],
  },
  bedroom: {
    name: 'Bedroom',
    breadcrumbLabel: 'Bedroom',
    heading: 'Bedroom Furniture',
    description: 'Relaxing bedroom designs that combine comfort and style.',
    products: [
      { id: '2', name: 'Bed', label: 'Bed', title: 'Cozy Bed', price: 1200, image: '/bedroom.jpg', category: 'bedroom', categorySlug: 'bedroom' },
    ],
  },
  sofa: {
    name: 'Sofa',
    breadcrumbLabel: 'Sofa',
    heading: 'Sofas',
    description: 'Explore a wide selection of modern and classic sofas.',
    products: [],
  },
  'tables-chairs': {
    name: 'Tables & Chairs',
    breadcrumbLabel: 'Tables & Chairs',
    heading: 'Tables & Chairs',
    description: 'Dining and living tables paired with stylish chairs.',
    products: [],
  },
  'tv-cabinets': {
    name: 'TV Cabinets & Consoles',
    breadcrumbLabel: 'TV Cabinets & Consoles',
    heading: 'TV Cabinets & Consoles',
    description: 'Storage and display solutions for your media setup.',
    products: [],
  },
  office: {
    name: 'Desk',
    breadcrumbLabel: 'Desk',
    heading: 'Desks',
    description: 'Functional desks for home office and workspace setups.',
    products: [],
  },
  'office-chairs': {
    name: 'Office Chairs',
    breadcrumbLabel: 'Office Chairs',
    heading: 'Office Chairs',
    description: 'Ergonomic and stylish chairs for your office space.',
    products: [],
  },
  bookshelf: {
    name: 'Bookshelf',
    breadcrumbLabel: 'Bookshelf',
    heading: 'Bookshelves',
    description: 'Modern shelving to organize books and decor items.',
    products: [],
  },
  'dining-table-chairs': {
    name: 'Dining Table & Chairs',
    breadcrumbLabel: 'Dining Table & Chairs',
    heading: 'Dining Tables & Chairs',
    description: 'Beautiful dining sets for meals and gatherings.',
    products: [],
  },
  bed: {
    name: 'Bed',
    breadcrumbLabel: 'Bed',
    heading: 'Beds',
    description: 'Comfortable beds with modern design details.',
    products: [],
  },
  wardrobe: {
    name: 'Wardrobe',
    breadcrumbLabel: 'Wardrobe',
    heading: 'Wardrobes',
    description: 'Wardrobes to keep your bedroom neat and stylish.',
    products: [],
  },
  bath: {
    name: 'Bathtub',
    breadcrumbLabel: 'Bathtub',
    heading: 'Bathtubs',
    description: 'Luxury bathtubs to elevate your bathroom design.',
    products: [],
  },
  mirror: {
    name: 'Mirror',
    breadcrumbLabel: 'Mirror',
    heading: 'Mirrors',
    description: 'Statement mirrors that complete any bathroom interior.',
    products: [],
  },
};

export const allProducts: Product[] = [
  // Combine all products from categoryMap
  ...Object.values(categoryMap).flatMap(cat => cat.products),
];