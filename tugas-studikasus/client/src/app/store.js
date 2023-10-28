import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice.js";
import categoryReducer from "../features/categorySlice.js";
import tagReducer from "../features/tagsSlice.js";
import useractionReducer from "../features/useractionSlice.js";
import tagsSelectedReducer from "../features/tagsSelectedSlice.js";
import catSelectedReducer from "../features/catSelectedSlice.js";

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    tag: tagReducer,
    useraction: useractionReducer,
    tagsSelected: tagsSelectedReducer,
    catSelected: catSelectedReducer,
  },
});

export default store;
