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
    return response.data.products;
  }
);

export const getProductQ = createAsyncThunk(
  "products/getProductQ",
  async (q) => {
    let response = await axios.get(`http://localhost:3000/api/products?q=${q}`);
    return response.data.products;
  }
);

export const getProductCat = createAsyncThunk(
  "products/getProductCat",
  async (cat) => {
    const response = await axios.get(
      `http://localhost:3000/api/products?category=${cat}`
    );
    return response.data.products;
  }
);

export const getProductTags = createAsyncThunk(
  "products/getProductTags",
  async (tags) => {
    const response = await axios.get(
      `http://localhost:3000/api/products?` +
        tags.map((tag) => "tags=" + tag).join("&")
    );
    return response.data.products;
  }
);

const productEntity = createEntityAdapter({
  selectId: (product) => product._id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        productEntity.setAll(state, action.payload);
      })
      .addCase(getProductQ.fulfilled, (state, action) => {
        productEntity.setAll(state, action.payload);
      })
      .addCase(getProductCat.fulfilled, (state, action) => {
        productEntity.setAll(state, action.payload);
      })
      .addCase(getProductTags.fulfilled, (state, action) => {
        productEntity.setAll(state, action.payload);
      });
  },
});

export const productSelectors = productEntity.getSelectors(
  (state) => state.product
);
export default productSlice.reducer;
