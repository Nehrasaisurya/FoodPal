import { useDispatch } from "react-redux";
import { addItem } from "../util/cartSlics";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  console.log(items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="py-2 m-2 border-gray-200 border-b-2 text-left"
          >
            <div className="flex justify-between">
              <div className="flex flex-col w-8/12">
                <span className="mr-3 font-semibold">
                  {item.card.info.name}
                </span>
                <span className="text-sm opacity-80">
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
                <span className="hidden sm:flex text-sm opacity-80">
                  {item.card.info.description.length < 100
                    ? item.card.info.description
                    : item.card.info.description.slice(0, 100) + "..."}
                </span>
              </div>
              <div className="relative">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    item.card.info.imageId
                  }
                  className="w-32 h-24 rounded-md relative"
                  alt=""
                />
                <div className="absolute bottom-0 left-6">
                  <button
                    className="px-4 py-1 bg-white rounded-sm"
                    onClick={() => handleAddItem(item)}
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
