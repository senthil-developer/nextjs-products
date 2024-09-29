"use client";

import { ProductType } from "@/types";
import { Product } from "./product";

const Products = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="grid grid-cols-2 place-items-baseline md:grid-cols-3 lg:grid-cols-4 gap-4 w-fit mx-auto">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
