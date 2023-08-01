import CardSkeleton from "@/components/CardSkeleton";
import Title from "@/components/Title";
import React from "react";

const Loading = () => {
  const itemCount = 10;
  const itemArray = Array.from(Array(itemCount).keys()); // Use Array.from instead of the spread operator

  return (
    <div className="h-screen md:px-20">
      <div className="overflow-auto h-full scrollbar-thin scrollbar-thumb-rose-200">
        <Title title="sandwich" />
        <div className="grid_product gap-14 content-center justify-items-center align-content-center">
          <ul className="space-y-2 list-disc">
            {itemArray.map((i: number) => (
              <li key={i}>
                <CardSkeleton />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Loading;
