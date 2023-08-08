import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import ConfirmOrder from "./ConfirmOrder";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { currencyFormat } from "@/helpers/currencyFormat";

const DesktopTableCart = () => {
  const { cart, removeItemFromCart, incrementCartItem, decrementCartItem } = useCart();
  return (
    <section className=" ">
      <table className=" w-11/12 mx-auto">
        <thead className="">
          <tr className="grid  text-xl  font-extrabold text-center grid-cols-6 gap-4  w-full mb-6">
            <th></th>
            <th className="col-span-2 ">Product</th>

            <th className=" -ml-3">Quantity</th>

            <th className=" ml-3">SubTotal</th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody className="">
          {cart.map((item) => (
            <tr key={item.id} className="text-md font-extrabold text-center grid grid-cols-6 bg-rose-950 my-1 p-2 rounded-md gap-4 text-pink-200 [&>*]:my-auto ">
              <td className="relative w-auto h-full">
                <Image src={item.image} fill alt={item.title} className=" rounded-md  object-cover" />
              </td>

              <td className="col-span-2 ">
                <h4>{item.title}</h4>
                <span>{item.price}</span>
              </td>

              <td>
                <div className=" flex flex-nowrap gap-2 text-pink-100 ">
                  <button type="button" onClick={() => decrementCartItem(item)}>
                    <AiOutlineMinusCircle size={20} color="#EAB308" />
                  </button>
                  <span className="text-md">{`${item.quantity}`.padStart(2, "0")}</span>
                  <button type="button" onClick={() => incrementCartItem(item)}>
                    <AiOutlinePlusCircle size={20} color="#EAB308" />
                  </button>
                </div>
              </td>

              <td className="text-sm">{currencyFormat(item.subTotal)}</td>

              <td>
                <button type="button" onClick={() => removeItemFromCart(item)}>
                  <FaTrashAlt color="#EAB308" />
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

export default DesktopTableCart;
