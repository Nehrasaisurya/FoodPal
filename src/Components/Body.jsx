import React from "react";
import Home from "./Home";
import Foodsnear from "./Foodsnear";
import Menu from "./Menu";
import Sale from "./Sale";
import FirstOrder from "./FirstOrder";
import App from "./App";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <Home />
      <Foodsnear />
      <Sale />
      <Menu />
      <FirstOrder />
      <App />
      <Footer />
    </div>
  );
};

export default Body;
