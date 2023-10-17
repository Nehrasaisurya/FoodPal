import "./App.css";
import Body from "./Components/Body";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import RestaurantMenu from "./Components/RestaurantMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./util/appStore";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
