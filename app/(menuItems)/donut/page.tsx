"use client";
import React, { useEffect } from "react";
import { Product, getDonuts } from "../../../content/products";
import Image from "next/image";
import Card from "@/components/Card";
import logo from "../../../public/assets/images/logodonut.png";
import Link from "next/link";
import Title from "@/components/Title";
import { currencyFormat } from "@/helpers/currencyFormat";
import { motion } from "framer-motion";

const ProductList: React.FC = () => {
  const donuts: Product[] = getDonuts();
  const [donutsList, setDonutsList] = React.useState<Product[]>([]);
  /*
  const getDonutsData = async () => {
    const data = await fetch("http://localhost:5000/donuts");
    const donutsList = await data.json();
    console.log(donutsList);
    return donutsList;
  };
  useEffect(() => {
    (async () => {
      setDonutsList(await getDonutsData());
    })();
    console.log(`this is the list: ${donutsList}`);
  }, []);*/
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="h-screen md:px-20 ">
      {" "}
      <div className="overflow-auto h-full scrollbar-thin scrollbar-thumb-rose-300 w-full">
        <Link href={"/"} className="flex">
          <Image src={logo} width={120} height={120} alt="Logo image" className="" />
          <div className="w-full h-full my-auto tracking-widest">
            <h1 className="text-pink-900 text-2xl font-extrabold self-center -ml-6 shadow-pink-600 drop-shadow-lg">Donut</h1>
            <h1 className="text-amber-600 text-xl font-extrabold self-center -ml-6 shadow-pink-600 drop-shadow-lg">Store</h1>
          </div>
        </Link>
        <Title title="DONUT" />
        <motion.div className="grid_product grid grid-cols-1 xs2:grid-cols-2 lg:grid-cols-3 gap-2  mb-10 " variants={gridVariants} initial="hidden" animate="visible">
          {" "}
          {donuts.map((donut: Product, index: number) => (
            <motion.div key={index} variants={cardVariants}>
              <Card title={donut.title} description={donut.description} price={currencyFormat(donut.price)} image={donut.image} value={donut.price} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductList;
