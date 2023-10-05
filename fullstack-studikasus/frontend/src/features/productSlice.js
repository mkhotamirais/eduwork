import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get(`http://localhost:3000/api/products`);
    return response.data.data;
  }
);
export const getProductsCategory = createAsyncThunk(
  "products/getProductsCategory",
  async (category) => {
    const response = await axios.get(
      `http://localhost:3000/api/products?category=${category}`
    );
    return response.data.data;
  }
);
export const getProductsQ = createAsyncThunk(
  "products/getProductsQ",
  async (q) => {
    const response = await axios.get(
      `http://localhost:3000/api/products?q=${q}`
    );
    return response.data.data;
  }
);

const productEntity = createEntityAdapter({
  selectId: (product) => product._id,
});

export const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        productEntity.setAll(state, action.payload);
      })
      .addCase(getProductsCategory.fulfilled, (state, action) => {
        productEntity.setAll(state, action.payload);
      })
      .addCase(getProductsQ.fulfilled, (state, action) => {
        productEntity.setAll(state, action.payload);
      });
  },
});

export const productSelectors = productEntity.getSelectors(
  (state) => state.product
);
export default productSlice.reducer;
