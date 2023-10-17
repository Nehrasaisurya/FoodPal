import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5036536&lng=78.53485069999999&restaurantId=" +
        resId
    );
    const json = await data.json();

    setresInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
