import React from "react";

const CardSkeleton = () => {
  return (
    <>
      <div className="flex">
        <div className="w-10 h-10 rounded-full bg-slate-400" />
        <div className="w-full h-full my-auto bg-slate-400"></div>
      </div>
      <div className="border border-slate-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4 flex-col">
          <div className="rounded-lg bg-slate-200 h-44 w-full mb-6 mx-auto"></div>
          <div className="flex-1 space-y-2 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-1">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-4 my-auto w-full bg-slate-200 rounded"></div>
                <div className="rounded-lg mt-10 ms-4 bg-slate-200 h-8 w-20 mb-10 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;
