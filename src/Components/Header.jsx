import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as MainLink } from "react-scroll";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePercentage } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const [showItems, setshowItems] = useState(false);

  const handleShow = () => {
    setshowItems(!showItems);
  };

  const [login, setlogin] = useState(false);
  const togglelogin = () => {
    setlogin(!login);
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <div className="fixed w-full flex justify-between items-center lg:px-24 md:px-8 px-6 py-5 bg-white z-50">
        <div>
          <Link to="/">
            <h1 className="font-bold text-xl">
              <span className="text-red-500">F</span>ood
              <span className="text-red-500">P</span>al
            </h1>
          </Link>
        </div>
        <div className="nav-items">
          <ul className="hidden md:flex gap-8 items-center text-sm">
            <li>
              <MainLink
                to="Home"
                activeClass="active"
                spy={true}
                className="flex items-center gap-1 cursor-pointer"
              >
                <AiOutlineHome className="text-lg" />
                Home
              </MainLink>
            </li>
            <li>
              <MainLink
                to="Offers"
                activeClass="active"
                spy={true}
                className="flex items-center gap-1 cursor-pointer"
              >
                <AiOutlinePercentage className="text-lg" />
                Offers
              </MainLink>
            </li>
            <li>
              <MainLink
                to="Menu"
                activeClass="active"
                spy={true}
                className="flex items-center gap-1 cursor-pointer"
              >
                <IoFastFoodOutline className="text-lg" />
                Menu
              </MainLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-5">
            <li className="cart" onClick={() => handleShow()}>
              <Link to="/cart">
                <BsCart2 className="text-xl" />
                <span className="cart-number">
                  {cartItems == null ? 0 : cartItems.length}
                </span>
              </Link>
            </li>

            <li onClick={() => togglelogin()} className="cursor-pointer">
              <AiOutlineUser className="text-xl" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
