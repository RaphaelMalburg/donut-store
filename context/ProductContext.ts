import { createContext, useContext } from "react";
import { Product } from "../interfaces";

interface IProductContext {
  products: Product[];
  addProduct: (product: Product) => void;
}

export const ProductContext = createContext<IProductContext>({
  products: [],
  addProduct(product) {},
});

export const useProductContext = () => useContext(ProductContext);
