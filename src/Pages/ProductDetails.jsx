import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const numericId = Number(id);

  const { products } = useProducts();
  const product = products.find((p) => p.id === numericId);
  //   console.log(product);

  // if(loading) return <p>Loading...</p>

  //   const { name, image, price, category } = product;
  const { name, image, price, category, description } = product || {};

  const handleAddToWishlist = () => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === product.id);
      if (isDuplicate) return alert("sorry");
      updatedList = [...existingList, product];
    } else {
      updatedList.push(product);
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  };

  return (
    <div>
      <h1>Products Details</h1>
      {/* <h2>{product.name}</h2> */}
      {product ? (
        <div className="card bg-base-100  shadow-sm">
          <figure className="h-48 overflow-hidden">
            <img className="w-full  object-cover" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: {name}</h2>
            <p>{description}</p>
            <p>Category: {category}</p>
            <p>Price: {price} $</p>
            <div className="card-actions justify-end">
              <button onClick={handleAddToWishlist} className="btn btn-primary">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
