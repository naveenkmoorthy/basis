import { getProducts, getCategories } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Suspense } from "react";

interface HomeProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { category } = await searchParams;
  const [products, categories] = await Promise.all([
    getProducts(category),
    getCategories(),
  ]);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text">Products</h1>
        <p className="mt-1 text-text-muted">
          {products.length} {products.length === 1 ? "item" : "items"}{" "}
          {category ? `in ${category}` : "available"}
        </p>
      </div>

      <div className="mb-8">
        <Suspense>
          <CategoryFilter categories={categories} selected={category} />
        </Suspense>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}