import { useParams } from "react-router-dom";
import useRestaurantMenu from "../util/useRestaurantMenu";
import ResCategory from "./ResCategory";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return (
      <h1 className="pt-32">
        <ShimmerMenu />
      </h1>
    );
  }

  const { name, cuisines, avgRating, locality } =
    resInfo?.cards[0]?.card?.card?.info;

  const catergories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cate) =>
        cate?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="pt-32">
      <div
        className="flex justify-between mx-auto w-10/12 sm:w-8/12 md:w-7/12 lg:w-6/12 pb-4"
        style={{ borderBottom: "1px solid gray" }}
      >
        <div className="">
          <h1 className="text-4xl font-semibold">{name}</h1>
          <h4 className="text-md opacity-90 -z-10 ">{cuisines.join(", ")}</h4>
          <h1 className="text-sm opacity-80 -z-10">📌{locality}</h1>
          <h1 className="text-sm opacity-80 -z-10">⭐{avgRating}</h1>
        </div>
      </div>
      {catergories.map((category, index) => (
        <ResCategory key={index} data={category.card.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
