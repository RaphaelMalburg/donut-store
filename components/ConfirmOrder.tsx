import React from "react";
import { useCart } from "@/hooks/useCart";
import { currencyFormat } from "@/helpers/currencyFormat";

const ConfirmOrder = () => {
  const { cart } = useCart();

  const totalAmount = cart.reduce((acc, item) => acc + item.subTotal, 0);

  return (
    <div className="w-5/6 mx-auto text-center pt-2 text-lg font-bold  text-pink-950 flex justify-between">
      <button type="button" className="bg-gradient-to-r from-rose-900 to-pink-950 rounded-lg text-pink-50 px-5 hover:opacity-80 py-2">
        Finish Order
      </button>
      <span className="my-auto">
        Total <strong className="text-md ml-2">{currencyFormat(totalAmount)}</strong>
      </span>
    </div>
  );
};

export default ConfirmOrder;
