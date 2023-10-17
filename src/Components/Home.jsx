import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <div className="lg:px-24 md:px-8 px-6 py-0 md:py-20 lg:py-32" id="Home">
      <div className="flex flex-col md:flex-row">
        <div className="w-12/12 md:w-6/12 py-20 pr-0 md:pr-32">
          <h1 className="text-3xl text-red-500">Hungry....!</h1>
          <h1 className="text-6xl mt-5 font-bold">
            Wait a minute for delicious.
          </h1>
          <h1 className="mt-5 opacity-70">
            Best cooks and Best delivery guys at your service.Hot and tasty food
            will reach you in 20min.
          </h1>

          <div className="w-full mt-10 border border-red-500 flex justify-between">
            <input
              placeholder="Enter your location"
              type="text"
              className="bg-transparent border-none py-3 outline-none px-5 w-auto"
            />
            <button className="px-5 py-3 bg-red-500 text-white flex items-center gap-1">
              Discover
              <AiOutlineArrowRight />
            </button>
          </div>
          <div className="clip text-sm px-6 bg-green-400 text-center py-3 text-white mx-10 mt-7">
            Get 50% Cashback on first Delivery🎉🎉
          </div>
        </div>
        <div className="w-12/12 md:w-7/12">
          <img
            src="Images/Screenshot 2023-10-12 113058.png"
            alt=""
            className="w-full h-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
