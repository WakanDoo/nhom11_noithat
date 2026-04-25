import Header from "@/components/Header";
import ProductGallery from "@/features/product-detail/ProductGallery";
import { RelatedProducts } from "@/features/product-detail/RelatedProducts";
import { getProductById, products } from "@/data/products";
import { notFound } from "next/navigation";

function formatPrice(price) {
  return `${new Intl.NumberFormat("vi-VN").format(price)} VND`;
}

function ShareIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
    </svg>
  );
}

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

  const gallery = product.gallery?.length ? product.gallery : [product.image];

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
          <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-10">
            <ProductGallery gallery={gallery} name={product.name} />

            <aside className="lg:pt-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h1 className="text-[20px] font-bold leading-none md:text-[22px] lg:text-[38px]">
                    {product.name}
                  </h1>
                  <p className="mt-3 text-[18px] font-bold leading-none md:text-[18px] lg:text-[25px]">
                    {formatPrice(product.price)}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Share product"
                  className="mt-0.5 shrink-0 text-stone-700 md:mt-1 lg:mt-4"
                >
                  <ShareIcon />
                </button>
              </div>

              <div className="mt-5 text-[9px] leading-5 md:text-[9px] lg:mt-6 lg:text-[11px] lg:leading-[1.7]">
                <p className="border-b border-stone-200 py-2">
                <span className="font-semibold">Designed by:</span>{" "}
                <span className="text-stone-700">{product.designedBy}</span>
              </p>
              <p className="border-b border-stone-200 py-2">
                <span className="font-semibold">Size:</span>{" "}
                <span className="text-stone-700">{product.size}</span>
              </p>
              <p className="border-b border-stone-200 py-2">
                <span className="font-semibold">Material:</span>{" "}
                <span className="text-stone-700">{product.material}</span>
              </p>
            </div>

              <div className="mt-5 md:mt-6 lg:mt-6">
                <h2 className="text-[16px] font-bold leading-none md:text-[15px] lg:text-[15px]">
                  Product details
                </h2>
                <p className="mt-3 text-[10px] leading-[1.65] text-stone-700 md:text-[10px] lg:max-w-[38ch] lg:text-[11px] lg:leading-[1.45]">
                {product.description}
              </p>
            </div>

              <div className="mt-5 flex flex-col gap-2 md:mt-6 lg:mt-7 lg:flex-row lg:items-center lg:gap-3">
                <button
                  type="button"
                  className="w-full rounded-full bg-black px-6 py-2.5 text-[12px] font-medium text-white transition hover:bg-stone-800 lg:w-auto lg:min-w-[124px] lg:py-3"
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  className="w-full rounded-full border border-black px-6 py-2.5 text-[12px] font-medium text-black transition hover:bg-stone-50 lg:w-auto lg:min-w-[124px] lg:py-3"
                >
                  Buy now
                </button>
              </div>
            </aside>
          </section>

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
