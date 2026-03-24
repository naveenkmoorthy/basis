import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-neutral-900">Products</h1>
        <p className="mt-2 text-neutral-500">
          {products.length} items available
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}