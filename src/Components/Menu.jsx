import React, { useState, useEffect } from "react";
import RestCard from "./RestCard";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Shimmer from "./Shimmer";

const Menu = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filteredRes, setfilterRes] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const [displayCount, setDisplayCount] = useState(8);
  const [Showmore, setshowmore] = useState("Show More");

  const loadMoreItems = () => {
    if (displayCount === 8) {
      setDisplayCount(displayCount + listOfRestro.length - displayCount);
      setshowmore("Show Less");
    } else {
      setDisplayCount(8);
      setshowmore("Show More");
    }
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5646193&lng=81.5222531&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setLoading(false);
  };

  return (
    <div className="lg:px-24 md:px-8 px-6 py-5" id="Menu">
      <h1 className="text-lg font-bold">Famous Restaurants near me 🔥</h1>
      <div>
        <div className="flex gap-5 mt-4">
          <button
            className="border border-black px-4 py-2 rounded-full text-sm"
            onClick={() => {
              const filteredList = listOfRestro.filter(
                (res) => res.info.avgRating > 4.5
              );
              setfilterRes(filteredList);
            }}
          >
            Rating 4.5+
          </button>
          <button
            className="border border-black px-4 py-2 rounded-full text-sm"
            onClick={() => {
              const filteredList = listOfRestro.filter(
                (res) => res.info.avgRating > 4
              );
              setfilterRes(filteredList);
            }}
          >
            Rating 4.0+
          </button>
          <button
            className="border border-black px-4 py-2 rounded-full text-sm"
            onClick={() => {
              const filteredList = listOfRestro.filter(
                (res) => res.info.avgRating > 3.5
              );
              setfilterRes(filteredList);
            }}
          >
            Rating 3.5+
          </button>
        </div>
        <div className="w-12/12 md:w-4/12 mx-auto mt-6 flex justify-center border border-red-500 rounded-md">
          <input
            type="text"
            className="px-4 py-2 w-full rounded-l-md border-none outline-none"
            placeholder="Search For Famous Restaurant"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-r-md"
            onClick={() => {
              const filteredrestro = listOfRestro.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterRes(filteredrestro);
            }}
          >
            <FiSearch />
          </button>
        </div>
      </div>

      {loading ? (
        <div>
          <Shimmer />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-0">
          {filteredRes.slice(0, displayCount).map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant?.info?.id}`}
            >
              <RestCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}

      {filteredRes && displayCount <= filteredRes.length && (
        <div
          className="flex justify-center mt-7"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <button
            className="px-4 py-2 bg-[#FFB619] text-white rounded-md font-semibold"
            onClick={loadMoreItems}
          >
            {Showmore}
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
