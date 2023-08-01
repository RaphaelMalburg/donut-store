import Link from "next/link";
import React from "react";
import logo from "./../public/assets/images/logodonut.png";
import Image from "next/image";
import Cart from "./Cart";

const MyOrderHeader = () => {
  return (
    <header>
      <Link href={"/"} className="flex h-fit">
        <Image src={logo} width={120} height={120} alt="Logo image" className="" />
        <div className="w-full h-full  my-auto tracking-widest">
          <h1 className="text-pink-900 text-2xl font-extrabold self-center -ml-6 shadow-pink-600 drop-shadow-lg">Donut</h1>
          <h1 className="text-amber-600 text-xl font-extrabold self-center -ml-6 shadow-pink-600 drop-shadow-lg">Store</h1>
        </div>
      </Link>
      <div className="absolute top-10 right-28">
        <Cart />
      </div>
    </header>
  );
};

export default MyOrderHeader;
