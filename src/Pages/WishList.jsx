import React, { useEffect, useState } from "react";
import WishlistCard from "../Components/WishlistCard";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) setWishlist(savedList);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "price-asc") {
      return [...wishlist].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-dsc") {
      return [...wishlist].sort((a, b) => b.price - a.price);
    } else {
      return wishlist;
    }
  })();

  const handleRemove = id =>{
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updatedList = existingList.filter(p => p.id !== id);
    // for ui instant update
    setWishlist(updatedList)
    // setWishlist(prev => prev.filter(p => p.id !== id));
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    
    
  }

  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <h2 className="text-3xl font-semibold ">
          Wishlist
          <span className="text-xl ml-2 text-gray-600">
            ({wishlist.length}) Products Found
          </span>
        </h2>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by price</option>
            <option onClick={sortedItem} value="price-asc">
              Low -&gt; High
            </option>
            <option onClick={sortedItem} value="price-dsc">
              High -&gt; Low
            </option>
          </select>
        </label>
      </div>

      <div className="space-y-5">
        {sortedItem.map((p) => (
          <WishlistCard key={p.id} p={p} handleRemove={handleRemove}></WishlistCard>
        ))}
      </div>
    </div>
  );
};

export default WishList;
