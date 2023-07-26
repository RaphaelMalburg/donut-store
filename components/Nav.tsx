"use client";
import Image from "next/image";
import menu from "../public/assets/icons/menu-icon.svg";
import donut from "../public/assets/icons/donut-icon.svg";
import beverages from "../public/assets/icons/beverages-icon.svg";
import sandwich from "../public/assets/icons/sandwich-icon.svg";
import cupcake from "../public/assets/icons/cupcake-icon.svg";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { MenuOpenContext } from "@/context/menuOpenContext";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import Cart from "./Cart";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("");
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleMenuDecorations = () => {
    setActiveItem(activeItem ? "" : activeItem);
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const { cart } = useCart();
  return (
    <nav
      className={`bg-gradient-to-r from-rose-900 to-pink-950 transition-all md:relative   ${
        menuOpen ? "md:w-32" : "md:w-72"
      }  md:h-full w-full h-28 mx-auto fixed  left-0 bottom-0 duration-500 delay-200 ease-in-out z-50 md:flex md:flex-col  justify-between `}>
      <button className="mx-auto bg-transparent  " style={{ transitionProperty: "width" }} onClick={handleToggleMenu}>
        <HiMenuAlt1 size={80} className={`${menuOpen ? "text-rose-50" : "text-amber-400"} hidden md:block active:text-amber-400`} />
      </button>

      <motion.ul
        className=" container mx-full md:pb-10 xl:pb-40 flex md:flex-col md:gap-12 pt-4 font-semibold text-xl tracking-wider text-center items-center md:w-auto w-[96%]  text-rose-50 -pl-2 md:mr-4 mx-auto"
        variants={container}
        initial="hidden"
        animate="visible">
        <motion.li
          whileHover={{ scale: 1.03 }}
          className="item relative justify-between h-auto w-full flex hover:scale-105 delay-150 duration-400 transition-all mx-auto  "
          variants={item}
          onClick={() => setActiveItem("donut")}
          key="donut">
          <span
            className={`md:top-0 md:left-0 bottom-0 left-0 md:w-2 md:h-full w-16 h-1  bg-amber-400 absolute rounded-full py-0.5 mx-2 md:mx-0 md:rounded-l-lg  md:py-4 ${
              activeItem === "donut" ? "visible" : "hidden"
            }`}></span>
          <Link href={"/donut"} className="flex align-bottom ">
            <Image src={donut} width={80} height={80} alt="Donuts" className=" mx-5 pb-2 md:w-20 w-10" />
            {!menuOpen ? <p className=" self-center  grow text-start ">Donut</p> : ""}
          </Link>
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.03 }}
          className="item relative justify-between w-full flex hover:scale-105 delay-150 duration-400 transition-all"
          variants={item}
          onClick={() => setActiveItem("cupcake")}
          key="cupcake">
          <span
            className={`md:top-0 md:left-0 bottom-0 left-0 md:w-2 md:h-full w-16 h-1  bg-amber-400 absolute rounded-full py-0.5 mx-2 md:mx-0 md:rounded-l-lg md:py-4 ${
              activeItem === "cupcake" ? "visible" : "hidden"
            }`}></span>
          <Link href={"/cupcake"} className="flex align-bottom ">
            <Image src={cupcake} width={80} height={80} alt="Donuts" className=" mx-5 pb-2 md:w-20 w-10" />
            {!menuOpen ? <p className=" self-center  grow text-start">Cupcake</p> : ""}
          </Link>
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.03 }}
          className="item relative justify-between w-full flex hover:scale-105 delay-150 duration-400 transition-all"
          variants={item}
          onClick={() => setActiveItem("sandwich")}
          key="sandwich">
          <span
            className={`md:top-0 md:left-0 bottom-0 left-0 md:w-2 md:h-full w-16 h-1  bg-amber-400 absolute rounded-full py-0.5 mx-2 md:mx-0 md:rounded-l-lg md:py-4  ${
              activeItem === "sandwich" ? "visible" : "hidden"
            }`}></span>
          <Link href={"/sandwich"} className="flex align-bottom ">
            <Image src={sandwich} width={80} height={80} alt="Donuts" className=" mx-1 ms-4 pb-2 md:w-20 w-10" />
            {!menuOpen ? <p className=" self-center  grow text-start px-6 ">Sandwich</p> : ""}
          </Link>
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.03 }}
          className="item relative justify-between w-full flex hover:scale-105 delay-150 duration-400 transition-all"
          variants={item}
          onClick={() => setActiveItem("beverages")}
          key="beverages">
          <span
            className={`md:top-0 md:left-0 bottom-0 left-0 md:w-2 md:h-full w-16 h-1  bg-amber-400 absolute rounded-full py-0.5 mx-2 md:mx-0 md:rounded-l-lg md:py-4 ${
              activeItem === "beverages" ? "visible" : "hidden"
            }`}></span>
          <Link href={"/beverages"} className="flex align-bottom ">
            <Image src={beverages} width={80} height={80} alt="Donuts" className="  ms-4 pb-2 md:w-20 w-10" />
            {!menuOpen ? <p className=" self-center  grow text-start px-6 me-4s">Beverages</p> : ""}
          </Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
};

export default Nav;
