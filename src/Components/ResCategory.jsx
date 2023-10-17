import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data }) => {
  const [showItems, setshowItems] = useState(false);

  const handleclick = () => {
    setshowItems(!showItems);
  };

  return (
    <div
      className="w-10/12 sm:w-8/12 md:w-7/12 lg:w-6/12 
        bg-gray-100 shadow-md p-4 mx-auto my-4"
    >
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleclick}
      >
        <span className="font-semibold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>{showItems ? "⬆️" : "⬇️"}</span>
      </div>

      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default ResCategory;
