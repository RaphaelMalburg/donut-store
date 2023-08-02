"use client";

import { Product } from "@/interfaces";
import React, { ReactNode, useState, createContext, useEffect } from "react";
import { toast } from "react-toastify";
import { snackEmoji } from "@/helpers/snackEmoji";

interface Items extends Product {
  quantity: number;
  subTotal: number | undefined;
}

//props do contexto
interface CartContextProps {
  cart: Items[];
  addItemsIntoCart: (item: Product) => void;
  incrementCartItem: (item: Items) => void;
  decrementCartItem: (item: Items) => void;
  removeItemFromCart: (item: Items) => any;
  confirmOrder: () => void;
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
//creates a new context and registers the component with the props properties, as provider
export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Items[]>([]);

  function addItemsIntoCart(item: Product): void {
    //search if item already exists in cart
    const itemIndex = cart.findIndex((cartItem) => cartItem.title === item.title && cartItem.id === item.id);

    // If the item already exists in the cart, update its quantity and subtotal
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      updatedCart[itemIndex].subTotal = updatedCart[itemIndex].quantity * item.value;
      setCart(updatedCart);
    } else {
      // If the item doesn't exist in the cart, add it as a new item
      const newItem: Items = { ...item, quantity: 1, subTotal: item.value };
      setCart((prevCart) => [...prevCart, newItem]);
    }
    toast.success(`${item.title} added to cart!`);
    console.log(`cart`, cart);
  }

  function updateItemQuantity(item: Items, newQuantity: number) {
    if (newQuantity <= 0) return;

    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.title === item.title) {
        return {
          ...cartItem,
          quantity: newQuantity,
          subTotal: cartItem.value * newQuantity,
        };
      }
      return cartItem;
    });

    setCart(updatedCart);
  }

  function removeItemFromCart(item: Items) {
    const updatedCart = cart.filter((cartItem) => cartItem.id == item.id && cartItem.title == item.title);
    setCart(updatedCart);
  }

  function incrementCartItem(item: Items) {
    updateItemQuantity(item, item.quantity + 1);
  }
  function decrementCartItem(item: Items) {
    updateItemQuantity(item, item.quantity - 1);
  }

  function confirmOrder() {}

  return <CartContext.Provider value={{ cart, addItemsIntoCart, removeItemFromCart, incrementCartItem, decrementCartItem, confirmOrder }}>{children}</CartContext.Provider>;
}
