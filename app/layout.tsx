import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./../components/Nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Donut Store",
  description: "Best donuts in town",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen max-h-screen  w-screen  md:flex relative`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
