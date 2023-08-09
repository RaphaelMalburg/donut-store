import "../../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Donuts",
  description: "Find out more about our donuts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <section className="w-full h-screen min-h-screen ">{children}</section>;
}
