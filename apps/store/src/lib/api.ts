import { Product } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function getProducts(category?: string): Promise<Product[]> {
  const url = category
    ? `${API_URL}/api/products?category=${encodeURIComponent(category)}`
    : `${API_URL}/api/products`;

  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${API_URL}/api/products/${id}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Product not found");
  return res.json();
}

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${API_URL}/api/products/meta/categories`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}