import React from "react";
import { currencyFormat } from "@/helpers/currencyFormat";
import { motion } from "framer-motion";
import { Product } from "../content/products";
import Card from "./Card";
import { useProductContext } from "@/context/ProductContext";

interface GridCardProps {
  children: Product[];
}

const GridCard: React.FC<GridCardProps> = ({ children }) => {
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
    <motion.div className="grid_product gap-14 content-center justify-items-center align-content-center" variants={gridVariants} initial="hidden" animate="visible">
      {children.map((item: Product, index: number) => (
        <motion.div key={index} variants={cardVariants}>
          <Card title={item.title} description={item.description} price={item.price} image={item.image} value={item.price} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GridCard;
