import React from "react";
import { Link } from "react-scroll";

const FirstOrder = () => {
  return (
    <div className="py-20 lg:px-24 md:px-8 px-6">
      <div className="bg-[#869584] flex flex-col md:flex-row rounded-md py-10 xl:py-0">
        <div className="w-full md:w-6/12 flex justify-center flex-col text-white px-10">
          <h1 className="text-2xl md:text-5xl font-semibold">
            Get 50% cashback
            <br /> on first order over Rs.200
          </h1>
          <h1 className="opacity-70 text-sm">
            Best cooks and Best delivery guys at your service.Hot and tasty food
            will reach you in 20min.
          </h1>
          <div className="flex justify-center">
            <Link to="Menu">
              <button className="bg-red-500 px-4 py-2 text-white rounded-md mt-5 font-semibold w-32">
                Order Now
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-4/12 mx-auto flex justify-center items-center">
          <img src="Images/biryani.png" alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default FirstOrder;
