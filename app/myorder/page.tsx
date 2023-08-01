"use client";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import MyOrderHeader from "@/components/MyOrderHeader";
import Table from "@/components/Table";

const MyOrder = () => {
  const { cart } = useCart();

  return (
    <div className="h-fit mb-10 max-h-screen  w-screen  md:flex flex-col relative overflow-auto scrollbar-thin scrollbar-thumb-rose-300 bg-pink-50">
      <MyOrderHeader />
      <section className="mx-auto mt-10 rounded-lg bg-pink-200 w-10/12 h-full">
        <h1 className="text-3xl font-extrabold text-center text-pink-900 pb-14 pt-5">My Order</h1>
        <div className="flex flex-col justify-center items-center ">
          <Table />
        </div>
      </section>
    </div>
  );
};

export default MyOrder;
