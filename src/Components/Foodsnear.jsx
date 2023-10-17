import React from "react";
import { Link as MainLink } from "react-scroll";

const Foodsnear = () => {
  return (
    <div className="lg:px-24 md:px-8 px-6 py-5">
      <h1 className="font-bold text-lg">Foods Near me 🔥</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-2 md:gap-10">
        <MainLink
          to="Menu"
          className="bg-gray-100 flex flex-col md:flex-row justify-between px-5 rounded-md cursor-pointer "
        >
          <div>
            <h1 className=" pt-5 pb-3 text-xl font-bold text-red-500">
              Biryani
            </h1>
            <h1 className="text-sm">Starting at ₹100</h1>
          </div>
          <img
            src="Images/biryani.png"
            alt=""
            className="w-36 mt-0 md:-mt-16"
          />
        </MainLink>
        <MainLink
          to="Menu"
          className="bg-gray-100 flex flex-col md:flex-row justify-between px-5 cursor-pointer"
        >
          <div>
            <h1 className=" pt-5 pb-3 text-xl font-bold text-red-500">Pizza</h1>
            <h1 className="text-sm">Starting at ₹70</h1>
          </div>
          <img src="Images/pizza.png" alt="" className="w-36 mt-0 md:-mt-16" />
        </MainLink>
        <MainLink
          to="Menu"
          className="bg-gray-100 flex flex-col md:flex-row justify-between px-5 cursor-pointer"
        >
          <div>
            <h1 className=" pt-5 pb-3 text-xl font-bold text-red-500">
              Pastry
            </h1>
            <h1 className="text-sm">Starting at ₹50</h1>
          </div>
          <img src="Images/pastry.png" alt="" className="w-36 mt-0 md:-mt-16" />
        </MainLink>
        <MainLink
          to="Menu"
          className="bg-gray-100 flex flex-col md:flex-row justify-between px-5 cursor-pointer"
        >
          <div>
            <h1 className=" pt-5 pb-3 text-xl font-bold text-red-500">
              Shakes
            </h1>
            <h1 className="text-sm">Starting at ₹40</h1>
          </div>
          <img src="Images/shakes.png" alt="" className="w-36 mt-0 md:-mt-16" />
        </MainLink>
      </div>
    </div>
  );
};

export default Foodsnear;
