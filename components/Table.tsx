import { currencyFormat } from "@/helpers/currencyFormat";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import React from "react";

const Table = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-20 gap-3">
        <h1 className="text-2xl font-extrabold text-center text-pink-900">Your cart is empty.</h1>
      </div>
    );
  }
  return (
    <section className=" ">
      <table className="w-5/6 mx-auto">
        <thead>
          <tr className="grid  text-xl font-extrabold text-center grid-cols-6 gap-10 mb-6">
            <th></th>
            <th className="col-span-2">Product</th>

            <th>Quantity</th>
            <th>SubTotal</th>
            <th></th>
          </tr>
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
                  <span>{item.quantity}</span>
                </td>
                <td>{currencyFormat(item.subTotal)}</td>
                <td>Delete</td>
                <div className=" bg-rose-900 w-full  h-0.5 rounded-full col-span-6" />
              </tr>
            ))}
          </tbody>
        </thead>
      </table>
    </section>
  );
};

export default Table;
