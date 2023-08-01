"use client";
import { useProductContext } from "@/context/ProductContext";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = () => {
  const { cart } = useCart();
  return (
    <Link href={"/myorder"} className="flex justify-center items-center h-20 gap-3">
      <AiOutlineShoppingCart size={35} color="#651535" />
      <span className=" items-center justify-center px-3 py-2 my-auto text-lg font-bold leading-none text-red-100 t-translate-y-1/2 bg-gradient-to-r from-rose-900 to-pink-950 rounded-full">
        {`${cart.length}`.padStart(2, "0")}
      </span>
    </Link>
  );
};

export default Cart;
