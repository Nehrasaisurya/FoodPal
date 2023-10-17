import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlics";

const appStore = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default appStore;
