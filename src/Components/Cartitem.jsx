import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeItem } from "../util/cartSlics";
const Cartitem = ({ items, index, updateItemCost }) => {
  const dispatch = useDispatch();
  const [cost, setCost] = useState(
    parseInt(
      items?.card?.info?.price
        ? items?.card?.info?.price
        : items?.card?.info?.defaultPrice
    ) / 100
  );
  const [noofproducts, setNoOfProducts] = useState(1);

  const decrease = () => {
    if (noofproducts > 1) {
      setNoOfProducts((x) => x - 1);
      const newCost =
        cost -
        (items?.card?.info?.price
          ? items?.card?.info?.price
          : items?.card?.info?.defaultPrice) /
          100;
      setCost(newCost);

      updateItemCost(index, newCost);
    }
  };

  const increase = () => {
    setNoOfProducts((x) => x + 1);
    const newCost =
      cost +
      (items?.card?.info?.price
        ? items?.card?.info?.price
        : items?.card?.info?.defaultPrice) /
        100;
    setCost(newCost);

    updateItemCost(index, newCost);
  };

  const handleRemove = () => {
    dispatch(removeItem(items?.card?.info?.id));
  };

  return (
    <div className="border-b border-b-black border-opacity-50 mb-4 pb-3">
      <div className="flex">
        <div className="w-3/12">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              items.card.info.imageId
            }
            className="w-32 h-[100px] rounded-sm mr-3"
            alt=""
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center md:justify-between gap-3 md:gap-3 w-12/12 md:w-10/12">
          <div className="w-full md:w-7/12">
            <p className="text-sm font-bold">{items?.card?.info?.name}</p>
          </div>

          <div className="flex justify-between items-center w-full md:w-8/12">
            <p className="text-sm font-semibold">Rs.{cost}</p>
            <p className="flex gap-2 items-center">
              <button onClick={decrease}>
                <AiOutlineMinus className="text-sm text-black " />
              </button>

              <span className="text-xs bg-green-500 text-white w-5 h-5 rounded-full flex justify-center items-center">
                {noofproducts}
              </span>
              <button onClick={increase}>
                <AiOutlinePlus className="text-sm text-black" />
              </button>
            </p>
            <button onClick={handleRemove}>
              <FaTimes className="text-red-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
