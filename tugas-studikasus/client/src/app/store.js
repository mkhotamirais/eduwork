import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice.js";
import categoryReducer from "../features/categorySlice.js";
import tagReducer from "../features/tagsSlice.js";
import useractionReducer from "../features/useractionSlice.js";

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    tag: tagReducer,
    useraction: useractionReducer,
  },
});

export default store;
