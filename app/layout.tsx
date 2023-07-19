import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./../components/Nav";
import { createContext } from "vm";
import { Product } from "@/content/products";
import { CartContext, CartProvider } from "@/context/CartContext";
const inter = Inter({ subsets: ["latin"] });

interface foodContextProps {
  donuts: Product[];
  cupcakes: Product[];
  beverages: Product[];
  sandwiches: Product[];
}

export const metadata = {
  title: "Donut Store",
  description: "Best donuts in town",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen max-h-screen  w-screen  md:flex relative overflow-hidden `}>
        <CartProvider>
          <Nav />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
