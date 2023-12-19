import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./pages/auth/authSlice.js";
import productReducer from "./pages/products/productSlice.js";
import categoryReducer, { choosedCategory } from "./pages/products/categorySlice.js";
import tagsReducer from "./pages/products/tagSlice.js";
import searchReducer from "./pages/header/searchSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    category: categoryReducer,
    tags: tagsReducer,
    search: searchReducer,
    choosedCategory: choosedCategory.reducer,
  },
});

// console.log(store.getState().auth);
