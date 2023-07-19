"use client";
import { useProductContext } from "@/context/ProductContext";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = () => {
  const { products } = useProductContext();
  return (
    <div className="">
      <AiOutlineShoppingCart />
      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
        {products.length}
      </span>
    </div>
  );
};

export default Cart;
