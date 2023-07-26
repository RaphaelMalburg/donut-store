"use client";
import { useCart } from "@/hooks/useCart";
import React from "react";

const MyOrder = () => {
  const { cart } = useCart();

  return <div>{cart.length}</div>;
};

export default MyOrder;
