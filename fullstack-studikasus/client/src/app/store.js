import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice.js";
import categoryReducer from "../features/categorySlice.js";

export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
  },
});
