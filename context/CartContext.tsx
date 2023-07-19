"use client";

import { Product } from "@/interfaces";
import React, { ReactNode, useState, createContext, useEffect } from "react";

interface Items extends Product {
  quantity: number;
  subTotal: number;
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

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Items[]>([]);

  function addItemsIntoCart(item: Product): void {
    const itemExists = cart.find((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      setCart(cart.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)));
    } else {
      setCart([...cart, { ...item, quantity: 1, subTotal: item.price }]);
    }

    console.log("New Cart ", cart);
  }
  return <CartContext.Provider value={{ cart, addItemsIntoCart }}>{children}</CartContext.Provider>;
}
