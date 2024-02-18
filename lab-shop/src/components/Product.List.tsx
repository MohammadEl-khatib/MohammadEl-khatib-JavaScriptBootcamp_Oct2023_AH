import React, { useEffect, useState } from "react";
import Product from "../models/Product";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../services/productService";
const ProductList = async () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
