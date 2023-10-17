const RestCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, costForTwo } = resData?.info;
  return (
    <div
      className="m-1 md:m-3 p-2  rounded-md "
      style={{
        boxShadow:
          " 0 0 3px 0.1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
    >
      <img
        className="h-[200px] w-full rounded-md"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt=""
      />
      <div className="px-2 py-2">
        <h3 className="font-bold">
          {name.length < 30 ? name : name.slice(0, 27) + "..."}
        </h3>
        <h4>⭐{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestCard;
