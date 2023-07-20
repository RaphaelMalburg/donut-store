import logo from "./../public/assets/images/logodonut.png";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";

interface CardProps {
  title: string;
  description: string;
  price: number | string;
  image: string;
  value?: number;
  inCart?: number;
}
const Card = ({ title, description, price, image, value, inCart }: CardProps) => {
  const { addItemsIntoCart } = useCart();

  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow mr-10 flex flex-col justify-center align-middle dark:bg-gray-800 dark:border-gray-700 min-h-full relative -z-10">
      {inCart && <span className="absolute top-1 left-1 rounded-full w-7 flex justify-center align-middle bg-amber-400 text-lg text-pink-950 font-bold z-10">{inCart}</span>}

      <Image className="rounded-t-lg max-h-60 object-cover" src={image} alt="" />

      <div className="p-5  h-fit">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <div className=" flex justify-between">
          <p>{price}</p>
          <p className="hidden">{value}</p>
          <button
            type="button"
            onClick={() => addItemsIntoCart({ title, description, price, image, value })}
            className="inline-flex items-center px-3 py-2 text-sm  text-center font-bold text-pink-950 bg-amber-400 rounded-lg  hover:scale-105 delay-10 transition-all duration-100 focus:ring-1 focus:outline-none focus:ring-pink-950 dark:bg-pink-900 dark:focus:ring-amber-400">
            Add to cart
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
