import Image from "next/image";
import Card from "../components/Card";
import logo from "../public/assets/images/logodonut.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="  min-h-screen flex flex-col w-full  text-pink-900 ">
      {" "}
      {/**aplicar animação de a cada clique ir comendo um pedaço do donut */}
      <Link href={"/"} className="flex ">
        <Image src={logo} width={120} height={120} alt="Logo image" className="" />
        <div className="w-full h-full my-auto tracking-widest">
          <h1 className="text-pink-900 text-2xl font-extrabold self-center -ml-6  shadow-pink-600 drop-shadow-lg">Donut</h1>
          <h1 className=" text-amber-600 text-xl  font-extrabold self-center -ml-6 shadow-pink-600 drop-shadow-lg">Store</h1>
        </div>
      </Link>
      <section>
        <div className="container mx-auto text-center flex ">
          <Image src={logo} width={320} height={320} alt="Logo image" className="" />
          <div className="my-auto">
            <h1 className="text-5xl font-bold mb-8 text-rose-900">Welcome to The Donut Store</h1>
            <p className="text-lg text-rose-900">Indulge in our delicious and freshly baked donuts</p>
            <Link href={"/products"} className="bg-gradient-to-r from-rose-700 to-pink-700 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full mt-10">
              Order Now
            </Link>
          </div>
        </div>
      </section>
      {/* Featured Donuts Section */}
      <section className="py-16 bg-white ">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold mb-8 text-pink-600 text-center">Featured Donuts</h2>
          <div className="grid grid-cols-3 gap-8 ">
            {/* Featured Donut 1 */}
            <div className="p-4 bg-pink-100 rounded-lg">
              <Image src={logo} alt="Featured Donut" className="mx-auto mb-4" width={120} height={120} />
              <h3 className="text-xl font-bold mb-2">Classic Glazed</h3>
              <p className="text-gray-700">Our signature donut with a sweet glaze that melts in your mouth</p>
            </div>

            {/* Featured Donut 2 */}
            <div className="p-4 bg-pink-100 rounded-lg">
              <Image src={logo} alt="Featured Donut" className="mx-auto mb-4" width={120} height={120} />
              <h3 className="text-xl font-bold mb-2">Chocolate Sprinkle</h3>
              <p className="text-gray-700">Rich chocolate donut topped with colorful sprinkles</p>
            </div>

            {/* Featured Donut 3 */}
            <div className="p-4 bg-pink-100 rounded-lg">
              <Image src={logo} alt="Featured Donut" className="mx-auto mb-4" width={120} height={120} />
              <h3 className="text-xl font-bold mb-2">Strawberry Glazed</h3>
              <p className="text-gray-700">A fruity twist on our classic donut with strawberry glaze</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
