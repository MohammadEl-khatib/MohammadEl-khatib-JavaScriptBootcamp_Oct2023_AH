import Product from "../models/Product";

const API_BASE_URL = process.env.VITE_API_BASE_URL;

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products.');
  }
  return response.json() as Promise<Product[]>;
};
