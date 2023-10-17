import React from "react";

const ShimmerMenu = () => {
  return (
    <div>
      <div className="w-10/12 sm:w-8/12 md:w-7/12 lg:w-6/12 pb-4 flex justify-between mx-auto border-b border-b-black">
        <div className="h-[120px] w-[337px] bg-gray-100"></div>
      </div>
      <div className="w-10/12 sm:w-8/12 md:w-7/12 lg:w-6/12 pb-4 flex justify-between flex-col mx-auto">
        <div className="h-[60px] w-full bg-gray-100 mt-3"></div>
        <div className="h-[60px] w-full bg-gray-100 mt-3"></div>
        <div className="h-[60px] w-full bg-gray-100 mt-3"></div>
        <div className="h-[60px] w-full bg-gray-100 mt-3"></div>
        <div className="h-[60px] w-full bg-gray-100 mt-3"></div>
        <div className="h-[60px] w-full bg-gray-100 mt-3"></div>
      </div>
    </div>
  );
};

export default ShimmerMenu;
