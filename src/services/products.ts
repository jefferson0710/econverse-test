import type { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("/products.json");

  if (!res.ok) throw new Error("Erro ao carregar produtos");

  const data = await res.json();
  return data.products ?? [];
}
