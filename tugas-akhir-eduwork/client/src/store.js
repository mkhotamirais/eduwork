import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import productsReducer from "./features/productsSlice";
import cartReducer from "./features/cartSlice";
import addressReducer from "./features/addressSlice";
import tagsReducer from "./features/tagsSlice";
import categoriesReducer from "./features/categoriesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    addresses: addressReducer,
    tags: tagsReducer,
    categories: categoriesReducer,
  },
});
