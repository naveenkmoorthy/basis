import { Product } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/api/products`, {
    next: { revalidate: 60 }, // Next.js caches this for 60 seconds
  });

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