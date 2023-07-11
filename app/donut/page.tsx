import React from "react";
import { Product, getDonuts, getCupcakes, getBeverages, getSandwiches } from "./../../content/products";
import Image from "next/image";
import Card from "@/components/Card";

const ProductList: React.FC = () => {
  const donuts: Product[] = getDonuts();
  const cupcakes: Product[] = getCupcakes();
  const beverages: Product[] = getBeverages();
  const sandwiches: Product[] = getSandwiches();

  // You can now use these variables to display the product information on the screen

  return (
    <div>
      <h2>Donuts</h2>
      <h1>{donuts[1].title}</h1>
      {donuts.map((donut: Product, index: number) => (
        <div key={index}>
          <Card title={donut.title} description={donut.description} price={donut.price} image={donut.image} />
        </div>
      ))}
      {/*
      {/* Display the cupcakes */}
      <h2>Cupcakes</h2>
      {cupcakes.map((cupcake: Product, index: number) => (
        <div key={index}>
          <h3>{cupcake.title}</h3>
          <p>{cupcake.description}</p>
          <p>Price: €{cupcake.price}</p>
          <p>{cupcake.additionalInfo}</p>
          <Image src={cupcake.image} width={100} height={100} alt="product image"></Image>
        </div>
      ))}
      {/* Display the beverages */}
      <h2>Beverages</h2>
      {beverages.map((beverage: Product, index: number) => (
        <div key={index}>
          <h3>{beverage.title}</h3>
          <p>{beverage.description}</p>
          <p>Price: €{beverage.price}</p>
          <p>{beverage.additionalInfo}</p>
          <Image src={beverage.image} width={100} height={100} alt="product image"></Image>
        </div>
      ))}
      {/* Display the sandwiches */}
      <h2>Sandwiches</h2>
      {sandwiches.map((sandwich: Product, index: number) => (
        <div key={index}>
          <h3>{sandwich.title}</h3>
          <p>{sandwich.description}</p>
          <p>Price: €{sandwich.price}</p>
          <p>{sandwich.additionalInfo}</p>
          <Image src={sandwich.image} width={100} height={100} alt="product image"></Image>
        </div>
      ))}
      */
    </div>
  );
};

export default ProductList;
