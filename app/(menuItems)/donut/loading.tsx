import CardSkeleton from "@/components/CardSkeleton";
import Title from "@/components/Title";
import React from "react";

const Loading = () => {
  const itemCount = 10;
  const itemArray = Array.from(Array(itemCount).keys()); // Use Array.from instead of the spread operator

  return (
    <div className="h-screen md:px-20">
      <div className="overflow-auto h-full scrollbar-thin scrollbar-thumb-rose-200">
        <Title title="Donut" />
        <div className="  gap-14 content-center justify-items-center align-content-center">
          <div className="space-y-2 list-disc md:grid-cols-3 sm:grid-cols-2 grid ">
            {itemArray.map((i: number) => (
              <div key={i}>
                <CardSkeleton />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
