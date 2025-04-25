import React from "react";
import UpdateCart from "../UpdateCart";
import DeleteItem from "../DeleteItem";
const CartItem = ({ item }) => {
  return (
    <li className="py-2 sm:flex sm:items-center sm:justify-between">
      <div className="mb-1 sflex items-center gap-3  sm:mb-0">
        <span>
          <img className="rounded-full w-12 mb-2 h-12" src={item.image} alt="" />
        </span>
        {item.quantity}&times; {item.name}
      </div>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="font-bold text-sm">${item.totlaPrice}</p>
        <UpdateCart id={item.id} currentQuantity={item.currentQuantity} />
        <DeleteItem id={item.id} />
      </div>
    </li>
  );
};

export default CartItem;
