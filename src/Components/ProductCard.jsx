import React from "react";

const ProductCard = ({product}) => {
    const {name, image, price, category} = product;
    
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
        <h2 className="card-title">Name: {name}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <p>Category: {category}</p>
        <p>Price: {price} $</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
