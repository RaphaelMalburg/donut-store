import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sandwich",
  description: "Find out more about our Sandwich",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <section className="w-full h-fit min-h-screen">{children}</section>;
}
