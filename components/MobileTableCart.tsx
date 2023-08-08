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

const MobileTableCart = () => {
  const { cart, removeItemFromCart, incrementCartItem, decrementCartItem } = useCart();
  return (
    <section className="w-full">
      <table className="w-full ">
        {cart.map((item) => {
          return (
            <tr key={item.id} className="grid grid-flow-row text-md font-extrabold   bg-rose-950 my-1 p-2 rounded-md gap-2 text-pink-200 [&>*]:my-auto w-10/12 mx-auto">
              <td className="relative w-auto h-28 ">
                <Image src={item.image} fill alt={item.title} className="object-cover " />
              </td>
              <td>
                <h4 className="text-lg">{item.title}</h4>
                <span className="text-lg">{item.price}</span>
              </td>
              <td>
                <div className=" flex flex-nowrap gap-1 text-pink-100 ">
                  <button type="button" onClick={() => decrementCartItem(item)}>
                    <AiOutlineMinusCircle size={20} color="#EAB308" />
                  </button>
                  <span className="text-md">{`${item.quantity}`.padStart(2, "0")}</span>
                  <button type="button" onClick={() => incrementCartItem(item)}>
                    <AiOutlinePlusCircle size={20} color="#EAB308" />
                  </button>
                  <td className="pl-4">
                    <button type="button" onClick={() => removeItemFromCart(item)}>
                      <FaTrashAlt color="#EAB308" />
                    </button>
                  </td>
                </div>
              </td>{" "}
              <td>
                <h4 className="text-sm">Subtotal</h4>
                <span className="text-lg">{currencyFormat(item.subTotal)}</span>
              </td>
            </tr>
          );
        })}
        <ConfirmOrder />
      </table>
    </section>
  );
};

export default MobileTableCart;
