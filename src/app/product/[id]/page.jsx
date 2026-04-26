import Header from "@/components/Header";
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
        <Header
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: product.category },
            { label: product.name },
          ]}
        />

        <div className="px-5 pb-0 pt-7 md:px-8 md:pt-10 lg:px-10 lg:pb-0 lg:pt-0">
          <ProductDetailSection product={product} gallery={gallery} />

          <RelatedProducts products={products} currentId={product.id} />
        </div>

        <footer className="mt-7 bg-black text-white md:mt-12 lg:mt-24">
          <div className="px-4 py-3 md:px-6 lg:px-5 lg:py-4">
            <div className="flex flex-col items-center justify-center gap-1 text-center text-[7px] uppercase tracking-[0.12em] text-white/90 md:text-[8px] lg:flex-row lg:justify-between lg:gap-6 lg:text-[10px]">
              <div className="flex flex-wrap items-center justify-center gap-1 lg:gap-2">
              <span>Contact</span>
              <span>|</span>
              <span>All stores</span>
              <span>|</span>
              <span>Privacy and data protection policy</span>
            </div>
              <div className="flex items-center gap-2 lg:gap-3">
                <span className="text-[7px] normal-case tracking-normal text-white md:text-[8px]">
                  Follow us on:
                </span>
                <InstagramIcon />
                <FacebookIcon />
                <GmailIcon />
              </div>
            </div>
            <div className="mt-1 flex items-center justify-center gap-1 text-[7px] text-white md:text-[8px] lg:mt-3 lg:justify-start lg:text-[9px]">
              <MailIcon />
              <span>owlhome@gmail.com</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
