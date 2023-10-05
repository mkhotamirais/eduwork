import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get(`http://localhost:3000/api/products`);
    return response.data.data;
  }
);

export const getProductCategory = createAsyncThunk(
  "products/getProductCategory",
  async (category) => {
    const response = await axios.get(
      `http://localhost:3000/api/products?category=${category}`
    );
    return response.data.data;
  }
);

export const getProductQ = createAsyncThunk(
  "products/getProductQ",
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
      .addCase(getProductCategory.fulfilled, (state, action) => {
        productEntity.setAll(state, action.payload);
      })
      .addCase(getProductQ.fulfilled, (state, action) => {
        productEntity.setAll(state, action.payload);
      });
  },
});

export const productSelectors = productEntity.getSelectors(
  (state) => state.product
);
export default productSlice.reducer;
