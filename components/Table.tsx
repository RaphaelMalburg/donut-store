"use client";

import { currencyFormat } from "@/helpers/currencyFormat";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import ConfirmOrder from "./ConfirmOrder";
import { useEffect, useState } from "react";
import DesktopTableCart from "./DesktopTableCart";
import MobileTableCart from "./MobileTableCart";

const Table = () => {
  const { cart, removeItemFromCart, incrementCartItem, decrementCartItem } = useCart();

  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    function updateTableComponentBasedInWindowWidth() {
      const currentWidth = document.documentElement.clientWidth;
      setWindowWidth(currentWidth);
    }
    window.addEventListener("resize", updateTableComponentBasedInWindowWidth);

    return () => {
      window.removeEventListener("resize", updateTableComponentBasedInWindowWidth);
    };
  }, []);

  if (cart.length === 0) {
    return (
      <div className="flex justify-center flex-col items-center h-20 gap-3">
        <h1 className="text-2xl font-extrabold text-center text-pink-900">Your cart is empty.</h1>

        <Link href="/products">
          <button className="bg-rose-900 text-pink-50 px-4 py-2 rounded-md hover:bg-rose-800 transition duration-300 ease-in-out">Continue Shopping</button>
        </Link>
      </div>
    );
  }
  return windowWidth > 500 ? <DesktopTableCart /> : <MobileTableCart />;
};

export default Table;
