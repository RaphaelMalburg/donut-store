import Image from "next/image";
import Card from "../../components/Card";
import logo from "../../public/assets/images/logodonut.png";
import Link from "next/link";
import Cart from "@/components/Cart";
import donut1 from "../../public/assets/images/donut1.jpg";
import donut2 from "../../public/assets/images/donut2.jpg";
import donut3 from "../../public/assets/images/donut3.jpg";
import donutIcon from "../../public/assets/icons/doughnut.png";

export default function Home() {
  return (
    <main className=" h-full  min-h-screen flex flex-col px-4  w-full text-pink-900 overflow-auto scrollbar-thin scrollbar-thumb-rose-300 bg-gradient-to-r from-pink-50 to-pink-200">
      {" "}
      {/**aplicar animação de a cada clique ir comendo um pedaço do donut */}
      <Link href={"/"} className="grid grid-cols-2 h-fit w-fit ">
        <Image src={logo} width={120} height={120} alt="Logo image" className="" />
        <div className="w-full h-full flex flex-col justify-center align-middle -ml-6 tracking-widest">
          <h1 className="text-pink-900 text-2xl font-extrabold self-center -ml-6 shadow-pink-600 drop-shadow-lg">Donut</h1>
          <h1 className="text-amber-600 text-xl font-extrabold self-center -ml-6 shadow-pink-600 drop-shadow-lg">Store</h1>
        </div>
      </Link>
      {/* Hero Section */}
      <section className="w-full ">
        <div className=" flex justify-center ">
          <div className="relative md:h-40 md:w-36 hidden md:block mx-8 ">
            <Image src={donutIcon} fill alt="Logo image" className="" />
          </div>
          <div className="my-auto grid gap-2">
            <h1 className="md:text-5xl text-xl font-bold mb-8 text-rose-900">Welcome to The Donut Store</h1>
            <p className="md:text-lg text-md text-rose-900">Indulge in our delicious and freshly baked donuts</p>
          </div>{" "}
        </div>{" "}
        <Link
          href={"/products"}
          className=" w-fit flex mx-auto justify-center  bg-gradient-to-r from-rose-700 to-pink-700 hover:bg-pink-700 text-white font-bold py-2 my-3 px-4 rounded-full ">
          Order Now
        </Link>
      </section>
      {/* Featured Donuts Section */}
      <section className="py-6 mb-12 md:mb-0">
        <div className="container mx-auto [&_p]:text-pink-950 [&_p]:font-semibold [&_h3]:tracking-wider">
          <h2 className="text-3xl font-bold mb-8 text-pink-600 text-center">Featured Donuts</h2>
          <div className="grid md:grid-cols-3 gap-8 ">
            {/* Featured Donut 1 */}
            <Link href={"/donut"} className="p-4 bg-pink-100  shadow-lg rounded-lg  ">
              <div className="relative w-full h-52 ">
                <Image src={donut1} alt="Featured Donut" className="mx-auto mb-4 object-cover rounded-lg" fill />
              </div>
              <h3 className="text-xl font-bold my-2">Classic Glazed</h3>
              <p className="text-gray-700">Our signature donut with a sweet glaze that melts in your mouth</p>
            </Link>

            {/* Featured Donut 2 */}
            <Link href={"/donut"} className="p-4 bg-pink-100  shadow-lg rounded-lg  ">
              <div className="relative w-full h-52 ">
                <Image src={donut2} alt="Featured Donut" className="mx-auto mb-4 object-cover rounded-lg" fill />
              </div>
              <h3 className="text-xl font-bold my-2">Chocolate Sprinkle</h3>
              <p className="text-gray-700">Rich chocolate donut topped with colorful sprinkles</p>
            </Link>

            {/* Featured Donut 3 */}
            <Link href={"/donut"} className="p-4 bg-pink-100  shadow-lg rounded-lg  ">
              <div className="relative w-full h-52 ">
                <Image src={donut3} alt="Featured Donut" className="mx-auto mb-4 object-cover rounded-lg" fill />
              </div>
              <h3 className="text-xl font-bold my-2">Strawberry Glazed</h3>
              <p className="text-gray-700">A fruity twist on our classic donut with strawberry glaze</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
