import donut1 from "../public/assets/images/donut1.jpg";
import donut2 from "../public/assets/images/donut2.jpg";
import donut3 from "../public/assets/images/donut3.jpg";
import donut4 from "../public/assets/images/donut4.jpg";
import donut5 from "../public/assets/images/donut5.jpg";
import donut6 from "../public/assets/images/donut6.jpg";
import sandwich1 from "../public/assets/images/sandwich1.jpg";
import sandwich2 from "../public/assets/images/sandwich2.jpg";
import sandwich3 from "../public/assets/images/sandwich3.jpg";
import sandwich4 from "../public/assets/images/sandwich4.jpg";
import sandwich5 from "../public/assets/images/sandwich5.jpg";
import cupcake1 from "../public/assets/images/cupcake1.jpg";
import cupcake2 from "../public/assets/images/cupcake2.jpg";
import cupcake3 from "../public/assets/images/cupcake3.jpg";
import cupcake4 from "../public/assets/images/cupcake4.jpg";
import cupcake5 from "../public/assets/images/cupcake5.jpg";
import cupcake6 from "../public/assets/images/cupcake6.jpg";
import cupcake7 from "../public/assets/images/cupcake7.jpg";
import beverage1 from "../public/assets/images/beverages1.jpg";
import beverage2 from "../public/assets/images/beverages2.jpg";
import beverage3 from "../public/assets/images/beverages3.jpg";
import beverage4 from "../public/assets/images/beverages4.jpg";
import beverage5 from "../public/assets/images/beverages5.jpg";

import { StaticImageData } from "next/image";

export interface Product {
  title: string;
  description: string;
  price: number;
  additionalInfo?: string;
  image?: any;
  id: number;
}

export const getDonuts = (): Product[] => {
  return [
    {
      title: "Chocolate Hazelnut Donut",
      description: "Indulge in the rich flavors of our chocolate glazed donut with a luscious hazelnut praline filling.",
      price: 4.5,
      additionalInfo: "Handcrafted with the finest Belgian chocolate and freshly ground hazelnuts.",
      image: donut1,
      id: 1,
    },
    {
      title: "Raspberry Filled Donut",
      description: "Experience the delightful combination of fluffy donut filled with sweet and tangy raspberry jam.",
      price: 3.75,
      additionalInfo: "Dusted with powdered sugar.",
      image: donut2,
      id: 2,
    },
    {
      title: "Vanilla Bean Donut",
      description: "Savor the classic vanilla bean donut topped with a silky vanilla bean glaze.",
      price: 3.5,
      additionalInfo: "Made with real vanilla beans.",
      image: donut3,
      id: 3,
    },
    {
      title: "Cinnamon Sugar Donut",
      description: "Enjoy the warm and comforting flavors of our cinnamon sugar donut.",
      price: 3.25,
      additionalInfo: "Dusted with cinnamon sugar.",
      image: donut4,
      id: 4,
    },
    {
      title: "Glazed Donut",
      description: "Treat yourself to our signature glazed donut.",
      price: 2.75,
      additionalInfo: "Handcrafted with the finest Belgian chocolate.",
      image: donut5,
      id: 5,
    },
    // Add more donut objects here...
  ];
};

export const getCupcakes = (): Product[] => {
  return [
    {
      title: "Red Velvet Cupcake",
      description: "Indulge in the classic red velvet cupcake topped with creamy cream cheese frosting.",
      price: 3.5,
      additionalInfo: "Moist and irresistible, a customer favorite.",
      image: cupcake1,
      id: 6,
    },
    {
      title: "Cookies and Cream Cupcake",
      description: "Delight your taste buds with a rich chocolate cupcake topped with cookies and cream frosting.",
      price: 3.75,
      additionalInfo: "Adorned with a mini Oreo cookie.",
      image: cupcake2,
      id: 7,
    },
    {
      title: "Strawberry Cupcake",
      description: "Savor the sweet and fruity flavors of our strawberry cupcake topped with strawberry buttercream frosting.",
      price: 3.25,
      additionalInfo: "Made with fresh strawberries.",
      image: cupcake3,
      id: 8,
    },
    {
      title: "Chocolate Cupcake",
      description: "Enjoy the rich and decadent flavors of our chocolate cupcake topped with chocolate buttercream frosting.",
      price: 3.25,
      additionalInfo: "Handcrafted with the finest Belgian chocolate.",
      image: cupcake4,
      id: 9,
    },
    // Add more cupcake objects here...
  ];
};

export const getBeverages = (): Product[] => {
  return [
    {
      title: "Iced Caramel Macchiato",
      description: "Refresh yourself with our signature iced caramel macchiato made with premium espresso, velvety milk, and a drizzle of caramel.",
      price: 4.0,
      additionalInfo: "Customizable sweetness and additional espresso shots or flavored syrups.",
      image: beverage1,
      id: 10,
    },
    {
      title: "Matcha Green Tea Latte",
      description: "Savor the earthy and vibrant flavors of our creamy matcha green tea latte.",
      price: 4.5,
      additionalInfo: "",
      image: beverage2,
      id: 11,
    },
    {
      title: "Cappuccino",
      description: "Enjoy the rich and bold flavors of our cappuccino.",
      price: 3.5,
      additionalInfo: "",
      image: beverage3,
      id: 12,
    },
    {
      title: "Hot Chocolate",
      description: "Warm yourself with our signature hot chocolate.",
      price: 3.25,
      additionalInfo: "Handcrafted with the finest Belgian chocolate.",
      image: beverage4,
      id: 13,
    },
    // Add more beverage objects here...
  ];
};

export const getSandwiches = (): Product[] => {
  return [
    {
      title: "Chicken Avocado Sandwich",
      description: "Savor the combination of tender grilled chicken, creamy avocado, crisp lettuce, and zesty aioli in our mouthwatering sandwich.",
      price: 6.5,
      additionalInfo: "",
      image: sandwich1,
      id: 14,
    },
    {
      title: "Caprese Panini",
      description: "Enjoy the Italian flavors of our grilled panini with fresh mozzarella, ripe tomatoes, basil, and balsamic glaze.",
      price: 6.25,
      additionalInfo: "",
      image: sandwich2,
      id: 15,
    },
    {
      title: "Turkey Club Sandwich",
      description: "Indulge in the classic turkey club sandwich with roasted turkey, crisp bacon, lettuce, tomato, and mayonnaise.",
      price: 6.75,
      additionalInfo: "",
      image: sandwich3,
      id: 16,
    },
    {
      title: "Ham and Cheese Panini",
      description: "Savor the classic ham and cheese panini with smoked ham, cheddar cheese, and honey mustard.",
      price: 6.25,
      additionalInfo: "",
      image: sandwich4,
      id: 17,
    },
    // Add more sandwich objects here...
  ];
};
