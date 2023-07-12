import React from "react";
import { Product, getDonuts, getCupcakes, getBeverages, getSandwiches } from "./../../content/products";
import Image from "next/image";
import Card from "@/components/Card";
import logo from "../../public/assets/images/logodonut.png";
import Link from "next/link";
import Title from "@/components/Title";
const Cupcake = () => {
  const cupcakes: Product[] = getCupcakes();
  return (
    <div>
      <Link href={"/"} className="flex ">
        <Image src={logo} width={120} height={120} alt="Logo image" className="" />
        <div className="w-full h-full my-auto tracking-widest">
          <h1 className="text-pink-900 text-2xl font-extrabold self-center -ml-6  shadow-pink-600 drop-shadow-lg">Donut</h1>
          <h1 className=" text-amber-600 text-xl  font-extrabold self-center -ml-6 shadow-pink-600 drop-shadow-lg">Store</h1>
        </div>
      </Link>
      <Title title="Cupcakes" />
      <div className=" px-2 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 place-items-center align-middle">
        {cupcakes.map((donut: Product, index: number) => (
          <div key={index}>
            <Card title={donut.title} description={donut.description} price={donut.price} image={donut.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cupcake;
