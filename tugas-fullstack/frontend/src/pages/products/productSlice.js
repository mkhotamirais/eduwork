import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";
import conf from "../../config";

export const getProducts = createAsyncThunk("products/getProducts", async ({ q, tagsParam, category }) => {
  const response = await axios.get(
    `${conf.apiHost}/api/products?${q ? "q=" + q : ""}${tagsParam.map((tag) => "&tags=" + tag).join("")}${
      category ? "&category=" + category : ""
    }`
  );
  // console.log(response.request.responseURL);
  return response.data.products;
});

const productEntity = createEntityAdapter({
  selectId: (product) => product._id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState({
    status: "idle",
    error: null,
  }),
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        productEntity.setAll(state, action.payload);
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const productSelectors = productEntity.getSelectors((state) => state.product);
export default productSlice.reducer;
