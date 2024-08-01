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

  const catergories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cate) =>
        cate?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const restaurant_data = resInfo?.cards[2]?.card?.card?.info;
  console.log(restaurant_data);

  return (
    <div className="pt-32">
      <div
        className="flex justify-between mx-auto w-10/12 sm:w-8/12 md:w-7/12 lg:w-6/12 pb-4"
        style={{ borderBottom: "1px solid gray" }}
      >
        <div className="flex justify-between">
          <div className="">
            <h1 className="text-4xl font-semibold">{restaurant_data?.name}</h1>
            <h4 className="text-md opacity-90 -z-10 ">
              {restaurant_data?.cuisines.join(", ")}
            </h4>
            <h1 className="text-sm opacity-80 -z-10">
              📌{restaurant_data?.locality}
            </h1>
            <h1 className="text-sm opacity-80 -z-10">
              ⭐{restaurant_data?.avgRating}
            </h1>
          </div>
        </div>
        <div>
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              restaurant_data?.cloudinaryImageId
            }
            alt="...."
            className="w-64 rounded-md"
          />
        </div>
      </div>
      {catergories.map((category, index) => (
        <ResCategory key={index} data={category.card.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
