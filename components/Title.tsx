import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1 className=" text-2xl font-bold text-pink-950 my-3 mx-2 py-8">{title}</h1>;
};

export default Title;
