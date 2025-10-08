import React from "react";

const WishlistCard = ({p, handleRemove}) => {
    const {id, image, price, name} = p
  return (
    <div className="card p-3 card-side border border-gray-200 bg-base-100  ">
      <figure>
        <img
        className="w-100 h-50 object-cover rounded-xl"
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-xl">{price} $ </p>
        <div className="card-actions justify-end">
          <button onClick={()=> handleRemove(id)} className="btn btn-outline">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
