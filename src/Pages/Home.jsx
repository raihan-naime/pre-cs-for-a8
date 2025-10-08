import React from "react";
import { Link } from "react-router";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProducts";

const Home = () => {
  // const products = useLoaderData();
  const {products, error, loading } = useProducts();
  // console.log(data);
  
  const featuredProducts = products.slice(0, 6)

  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <h2 className="text-3xl font-semibold ">Featured Products</h2>
        <Link className="btn btn-outline">See All Products</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
      </div>
    </div>
  );
};

export default Home;
