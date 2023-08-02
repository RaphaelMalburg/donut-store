import { currencyFormat } from "@/helpers/currencyFormat";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import ConfirmOrder from "./ConfirmOrder";

const Table = () => {
  const { cart, removeItemFromCart, incrementCartItem, decrementCartItem } = useCart();

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
  return (
    <section className=" ">
      <table className="w-5/6 mx-auto">
        <thead>
          <tr className="grid  text-xl font-extrabold text-center grid-cols-6 gap-10 mb-6">
            <th></th>
            <th className="col-span-2 ">Product</th>

            <th className=" -ml-3">Quantity</th>

            <th className=" -ml-3">SubTotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {cart.map((item) => (
            <tr key={item.id} className="text-md font-extrabold text-center grid grid-cols-6 bg-rose-300 my-1 p-2 rounded-md gap-4 text-pink-900 [&>*]:my-auto ">
              <td>
                <Image src={item.image} width={200} height={200} alt={item.title} className=" rounded-md" />
              </td>
              <td className="col-span-2 ">
                <h4>{item.title}</h4>
                <span>{item.price}</span>
              </td>
              <td>
                <div className=" flex flex-nowrap gap-2">
                  <button type="button" onClick={() => decrementCartItem(item)}>
                    <AiOutlineMinusCircle size={23} />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, "0")}</span>
                  <button type="button" onClick={() => incrementCartItem(item)}>
                    <AiOutlinePlusCircle size={23} />
                  </button>
                </div>
              </td>
              <td>{currencyFormat(item.subTotal)}</td>
              <td>
                <button type="button" onClick={() => removeItemFromCart(item)}>
                  <FaTrashAlt />
                </button>
              </td>
              <span className=" bg-rose-900 w-full  h-0.5 rounded-full col-span-6" />
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmOrder />
    </section>
  );
};

export default Table;
