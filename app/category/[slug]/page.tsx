import { CategoryPage } from "@/src/components/category-page";
import { categories } from "@/src/lib/categories";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CategoryPage slug={slug} />;
}
