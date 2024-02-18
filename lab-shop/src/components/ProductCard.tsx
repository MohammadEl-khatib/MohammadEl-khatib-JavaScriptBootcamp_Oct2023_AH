import React from "react";
import Product from "../models/Product";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <img src={product.photoURL} />
    </div>
  );
};

export default ProductCard;
