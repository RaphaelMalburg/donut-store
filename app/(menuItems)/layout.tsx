import "@/app/globals.css";
import Cart from "@/components/Cart";
import Nav from "@/components/Nav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Products",
  description: "Find out more about our Delicious Products",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-screen max-h-screen  w-screen   md:flex relative overflow-hidden bg-gradient-to-r from-pink-50 to-pink-200">
      <Nav />
      {children}{" "}
      <div className="absolute md:top-10 md:right-28 top-5 right-5">
        <Cart />
      </div>
    </section>
  );
}
