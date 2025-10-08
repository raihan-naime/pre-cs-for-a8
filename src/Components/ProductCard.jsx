import React from "react";
import { Link } from "react-router";

const ProductCard = ({product}) => {
    const {id, name, image, price, category} = product;
    
  return (
    <div className="card bg-base-100  shadow-sm hover:z-40 hover:scale-105 transition ease-in-out">
      <figure className="h-48 overflow-hidden">
        <img
        className="w-full  object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">Name: {name}</h2>
        
        <p className="font-bold text-xl">Category: {category}</p>
        <p className="text-xl font-semibold">Price: {price} $</p>
        <div className="card-actions justify-end">
          <Link to={`/productDetails/${id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
