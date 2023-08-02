import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <main className=" w-full h-fit min-h-screen text-center my-20">
      <h1 className="text-rose-900 font-extrabold text-xl">Products</h1>
      <h1 className="text-rose-900 font-extrabold text-xl">best sellers of the week</h1>
      <Link href={"/"}>
        <button className="bg-rose-900 text-pink-50 px-4 py-2 rounded-md hover:bg-rose-800 transition duration-300 ease-in-out">Go to Home</button>
      </Link>
    </main>
  );
};

export default Products;
