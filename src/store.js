import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Page/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
