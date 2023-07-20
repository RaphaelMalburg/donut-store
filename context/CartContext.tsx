"use client";

import { Product } from "@/interfaces";
import React, { ReactNode, useState, createContext, useEffect } from "react";

interface Items extends Product {
  quantity: number;
  subTotal: number | undefined;
}

interface UpdateCartProps {
  id: number;
  item: string;
  newQuantity: number;
}

interface RemoveItemFromCartProps {
  id: number;
  item: string;
}

interface CartContextProps {
  cart: Items[];
  addItemsIntoCart: (item: Product) => void;
  /*updateCart: ({ id, item, newQuantity }: UpdateCartProps) => void;
  removeItemFromCart: ({ id, item }: RemoveItemFromCartProps) => void;*/
}

interface CartProviderProps {
  children: ReactNode;
}

function transformPriceToNumber(priceString: string): number {
  // Remove all spaces and "€" symbols from the price string and replace commas with dots
  const numericString = priceString.replace(/[\s€]/g, "").replace(",", ".");
  // Convert the numeric string to a floating-point number
  return parseFloat(numericString);
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Items[]>([]);

  function addItemsIntoCart(item: Product): void {
    const itemIndex = cart.findIndex((cartItem) => cartItem.title === item.title && cartItem.id === item.id);

    if (itemIndex !== -1) {
      // If the item already exists in the cart, update its quantity and subtotal
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      updatedCart[itemIndex].subTotal = updatedCart[itemIndex].quantity * item.value;
      setCart(updatedCart);
    } else {
      // If the item doesn't exist in the cart, add it as a new item
      const newItem: Items = { ...item, quantity: 1, subTotal: item.value };
      setCart([...cart, newItem]);
    }
    console.log(`cart`, cart);
  }

  return <CartContext.Provider value={{ cart, addItemsIntoCart }}>{children}</CartContext.Provider>;
}
