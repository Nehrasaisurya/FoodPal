import React from "react";
import { IoIosAppstore } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";

const App = () => {
  return (
    <div className="py-20 lg:px-24 md:px-8 px-6">
      <div className="flex items-center">
        <div className="hidden md:flex md:w-6/12">
          <img src="Images/app.png" alt="" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Did you have our app...?</h1>
          <h1 className="opacity-60 mt-3">
            If not, you are missing some essence in your life...
          </h1>
          <div className="flex justify-center gap-8 mt-5">
            <button className="flex items-center gap-2 border border-black px-4 py-2 rounded-3xl">
              Playstore
              <BiLogoPlayStore className="text-xl" />
            </button>
            <button className="flex items-center gap-2 border border-black px-4 py-2 rounded-3xl">
              AppStore
              <IoIosAppstore className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
