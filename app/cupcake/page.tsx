import React from "react";
import { Product, getDonuts, getCupcakes, getBeverages, getSandwiches } from "./../../content/products";
import Image from "next/image";
import Card from "@/components/Card";
import logo from "../../public/assets/images/logodonut.png";
import Link from "next/link";
import Title from "@/components/Title";
import { currencyFormat } from "@/helpers/currencyFormat";
const Cupcake = () => {
  const cupcakes: Product[] = getCupcakes();
  return (
    <div className="h-screen md:px-20">
      <div className="overflow-auto h-full ">
        <Link href={"/"} className="flex">
          <Image src={logo} width={120} height={120} alt="Logo image" className="" />
          <div className="w-full h-full my-auto tracking-widest">
            <h1 className="text-pink-900 text-2xl font-extrabold self-center -ml-6  shadow-pink-600 drop-shadow-lg">Donut</h1>
            <h1 className="text-amber-600 text-xl font-extrabold self-center -ml-6 shadow-pink-600 drop-shadow-lg">Store</h1>
          </div>
        </Link>

        <Title title="Cupcake" />
        <div className=" grid_product gap-14 content-center justify-items-center align-content-center">
          {cupcakes.map((cupcake: Product, index: number) => (
            <div key={index}>
              <Card title={cupcake.title} description={cupcake.description} price={currencyFormat(cupcake.price)} image={cupcake.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cupcake;
