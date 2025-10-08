import React from "react";
import useProducts from "../Hooks/useProducts";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const { products } = useProducts();

  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <h2 className="text-3xl font-semibold ">All Products</h2>
        <button className="btn btn-outline">Search</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
