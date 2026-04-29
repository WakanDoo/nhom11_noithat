import Link from "next/link";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { CartBadgeLink } from "@/components/CartBadgeLink";
import { UserNavLink } from "@/components/UserNavLink";
import ProductDetailSection from "@/features/product-detail/ProductDetailSection";
import { RelatedProducts } from "@/features/product-detail/RelatedProducts";
import { getProductById, products } from "@/data/products";
import { notFound } from "next/navigation";

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 6.5h18v11H3z" />
      <path d="m4.5 8 7.5 6 7.5-6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] text-[10px] font-bold text-white">
      IG
    </span>
  );
}

function FacebookIcon() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1877F2] text-[14px] font-bold text-white">
      f
    </span>
  );
}

function GmailIcon() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white text-[10px] font-bold text-[#EA4335]">
      M
    </span>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({ id: String(product.id) }));
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const gallery = [product.image, ...(product.gallery || [])].filter(
    (image, index, images) => image && images.indexOf(image) === index
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-black">
      <div className="mx-auto min-h-screen w-full max-w-[375px] bg-white md:max-w-[768px] lg:max-w-[1280px]">
        <header className="fixed top-0 right-0 left-0 z-50 bg-white">
          <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between border-x border-b border-black/15 px-3 py-3 text-[11px] uppercase tracking-[0.12em] md:px-5 md:py-4 md:text-xs lg:px-6">
            <div className="flex items-center gap-3">
              <Link href="/menu" className="inline-flex items-center gap-1">
                <Menu className="h-3.5 w-3.5" />
                <span className="hidden md:inline">Menu</span>
              </Link>
              <span className="hidden md:inline">About</span>
              <Link href="/search" className="inline-flex items-center gap-1">
                <Search className="h-3.5 w-3.5" />
                <span className="hidden md:inline">Search</span>
              </Link>
            </div>
            <Link href="/" className="font-serif text-xl tracking-[0.2em] md:text-[46px] md:leading-none">OWLHOME</Link>
            <div className="flex items-center gap-3">
              <Link href="/products" className="hidden md:inline">Products</Link>
              <Link href="/construction" className="hidden md:inline">Construction</Link>
              <CartBadgeLink><ShoppingCart className="h-3.5 w-3.5" /></CartBadgeLink>
              <UserNavLink />
            </div>
          </div>
        </header>
        <div className="h-[68px] md:h-[90px]" />

        <div className="px-5 pb-0 pt-7 md:px-8 md:pt-10 lg:px-10 lg:pb-0 lg:pt-0">
          <ProductDetailSection product={product} gallery={gallery} />

          <RelatedProducts products={products} currentId={product.id} />
        </div>

        <footer className="mt-7 bg-black text-white md:mt-12 lg:mt-24">
          <div className="px-4 py-3 md:px-6 lg:px-5 lg:py-4">
            <div className="flex flex-col items-center justify-center gap-1 text-center text-[10px] uppercase tracking-[0.12em] text-white/90 md:text-[11px] lg:flex-row lg:justify-between lg:gap-6 lg:text-[12px]">
              <div className="flex flex-wrap items-center justify-center gap-1 lg:gap-2">
              <Link href="/contact">Contact</Link>
              <span>|</span>
              <span>All stores</span>
              <span>|</span>
              <span>Privacy and data protection policy</span>
            </div>
              <div className="flex items-center gap-2 lg:gap-3">
                <span className="text-[10px] normal-case tracking-normal text-white md:text-[11px] lg:text-[12px]">
                  Follow us on:
                </span>
                <InstagramIcon />
                <FacebookIcon />
                <GmailIcon />
              </div>
            </div>
            <div className="mt-1 flex items-center justify-center gap-1 text-[10px] text-white md:text-[11px] lg:mt-3 lg:justify-start lg:text-[12px]">
              <MailIcon />
              <span>owlhome@gmail.com</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
