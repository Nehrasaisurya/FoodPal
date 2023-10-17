import React, { useState } from "react";
import { RiCoupon2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Cartitem from "./Cartitem";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../util/cartSlics";
import { useEffect } from "react";

const Cart = () => {
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();

  const coupon = () => {
    setshow(!show);
  };

  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    const updatedItemCosts = cartItems.map(
      (item) =>
        parseInt(
          item?.card?.info?.price
            ? item?.card?.info?.price
            : item?.card?.info?.defaultPrice
        ) / 100
    );
    setItemCosts(updatedItemCosts);

    const newTotalCost = updatedItemCosts.reduce(
      (total, cost) => total + cost,
      0
    );
    const newFinalCost =
      newTotalCost + cartItems.length + (cartItems.length < 1 ? 0 : 50);
    setfinalcost(newFinalCost);
  }, [cartItems]);

  const [itemCosts, setItemCosts] = useState([]);

  const updateItemCost = (index, newCost) => {
    const updatedCosts = [...itemCosts];
    updatedCosts[index] = newCost;
    setItemCosts(updatedCosts);
    updateTotalCost(updatedCosts);
  };

  const updateTotalCost = (updatedCosts) => {
    const newTotalCost = updatedCosts.reduce((total, cost) => total + cost, 0);
    const newFinalCost =
      newTotalCost + cartItems.length + (cartItems.length < 1 ? 0 : 50);
    setfinalcost(newFinalCost);
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(cartItems[index]?.card?.info?.id));

    const updatedItemCosts = [...itemCosts];
    updatedItemCosts.splice(index, 1);
    setItemCosts(updatedItemCosts);

    updateTotalCost(updatedItemCosts);
  };

  const totalCost = itemCosts.reduce((total, cost) => total + cost, 0);

  const [finalcost, setfinalcost] = useState(
    totalCost + cartItems.length + (cartItems.length < 1 ? 0 : 50)
  );

  const offer1 = () => {
    const final = totalCost * 0.5;
    setfinalcost(parseInt(final));
  };

  const offer2 = () => {
    const final = totalCost - 125;
    setfinalcost(final);
  };

  const offer3 = () => {
    const final = totalCost / 2;
    setfinalcost(final);
  };

  const offer4 = () => {
    const final = totalCost * 0.8;
    setfinalcost(parseInt(final));
  };

  return (
    <div
      className="lg:px-24 md:px-8 px-6 py-20 pt-28 bg-gray-100 h-screen"
      id="Cart"
    >
      <div className="lg:px-24 md:px-8 px-0">
        <h1 className="text-xl font-bold">Your Cart 🔥</h1>
        <div className="flex flex-col md:flex-row mx-auto">
          <div className="w-full md:w-7/12 mb-2 md:m-4">
            <div className="h-96 bg-white mb-2 rounded-md p-4 overflow-y-scroll custom-scroll">
              {cartItems.length > 0 ? (
                cartItems.map((items, index) => (
                  <Cartitem
                    items={items}
                    index={index}
                    updateItemCost={updateItemCost}
                    handleRemoveItem={handleRemoveItem} // Pass the removal function
                    key={index}
                  />
                ))
              ) : (
                <div className="text-black py-8 text-center text-sm font-semibold flex items-center justify-center flex-col h-80">
                  <h1>
                    Cart's looking a bit lonely 😔, but we're ready to fill it
                    with magic!
                  </h1>
                  <Link to="/">
                    <p className="mt-3 underline">Explore now</p>
                  </Link>
                </div>
              )}
            </div>

            {show && (
              <div className="mt-8">
                <h1 className="text-sm font-semibold mb-3">
                  Some of the best coupons 🔥
                </h1>
                <div className="h-40 flex gap-5 overflow-x-scroll">
                  <img
                    src="Images/offer1.png"
                    alt=""
                    className="w-full h-full"
                    onClick={() => offer1()}
                  />
                  <img
                    src="Images/offer2.png"
                    alt=""
                    className="w-full h-full"
                    onClick={() => offer2()}
                  />
                  <img
                    src="Images/offer3.png"
                    alt=""
                    className="w-full h-full"
                    onClick={() => offer3()}
                  />
                  <img
                    src="Images/pffer4.png"
                    alt=""
                    className="w-full h-full"
                    onClick={() => offer4()}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="h-full md:w-4/12 mt-2 mb-2 md:m-4">
            <div className="bg-white w-full p-4 rounded-md text-xs">
              <h1 className="font-semibold text-lg">Bill Details:</h1>
              <div className="flex justify-between mt-3 opacity-80">
                <h1>Items Bill:</h1>
                <h1>Rs.{parseInt(totalCost)}.00</h1>
              </div>
              <div className="flex justify-between mt-2 opacity-80">
                <h1>Delivery Fee:</h1>
                <h1 className="text-green-600">Free</h1>
              </div>
              <div className="flex justify-between mt-2 opacity-80">
                <h1>Platform Fee:</h1>
                <h1>Rs.{cartItems.length}.00</h1>
              </div>
              <div className="flex justify-between mt-2  opacity-80">
                <h1>GST and Restaurant Charges:</h1>
                <h1>Rs.{cartItems.length < 1 ? 0 : 50}.00</h1>
              </div>
              <div className="flex justify-between mt-2 opacity-80 font-semibold text-xs border-b-black border-b pb-2">
                <h1>Final Bill:</h1>
                <h1>
                  Rs.
                  {parseInt(
                    totalCost +
                      cartItems.length +
                      (cartItems.length < 1 ? 0 : 50)
                  )}
                  .00
                </h1>
              </div>
              <div className="flex justify-between mt-2 opacity-90 font-extrabold text-sm ">
                <h1>To Pay:</h1>
                <h1>
                  Rs.
                  {parseInt(finalcost)}
                </h1>
              </div>
            </div>
            <div className="">
              <button
                className="w-full bg-white mt-5 py-3 flex justify-center items-center gap-2 rounded-md border border-black border-dashed bg-opacity-50 text-md"
                onClick={() => coupon()}
              >
                <RiCoupon2Fill className="text-lg" />
                Apply Coupon
              </button>
            </div>
            <div>
              <button className="py-3 bg-green-500 w-full mt-4 rounded-md text-white">
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
