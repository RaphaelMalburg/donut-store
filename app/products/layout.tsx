import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Sellers",
  description: "Best Sellers of the Store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <section className="w-full h-fit min-h-screen">{children}</section>;
}
