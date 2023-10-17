import React from "react";
import { Link } from "react-scroll";

const Sale = () => {
  return (
    <div className="py-0 md:py-20 lg:px-24 md:px-8 px-6" id="Offers">
      <h1 className="text-xl font-bold mb-6">Best Offers for you 🔥</h1>
      <div className="flex flex-col md:flex-row rounded-md py-10 xl:py-0">
        <Link to="Menu">
          <div className="h-60 flex gap-5 overflow-x-scroll">
            <img
              src="Images/offer1.png"
              alt=""
              className="w-full h-full cursor-pointer"
            />
            <img
              src="Images/offer2.png"
              alt=""
              className="w-full h-full  cursor-pointer"
            />
            <img
              src="Images/offer3.png"
              alt=""
              className="w-full h-full  cursor-pointer"
            />
            <img
              src="Images/pffer4.png"
              alt=""
              className="w-full h-full  cursor-pointer"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sale;
