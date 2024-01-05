import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { urlApi } from "../../envcaller";
import axios from "axios";
import { myToken } from "./token";

export const fetchCarts = createAsyncThunk(
  "posts/fetchPosts",
  async () => (await axios.get(`${urlApi}/carts`, myToken)).data
);

export const updateCart = createAsyncThunk("cart/updateCart", async (items) => {
  const response = await axios.put(`${urlApi}/carts`, items, myToken);
  return response.data;
});

export const addToCart = createAsyncThunk("cart/addToCart", async (data) => {
  const response = await axios.post(`${urlApi}/carts`, data, myToken);
  return response.data;
});

export const getCartQty = createAsyncThunk("cart/getCartQty", async () => (await axios.get(`${urlApi}/carts/qty`)).data);

export const decCartQty = createAsyncThunk("cart/decCartQty", async (id) => {
  const response = await axios.post(`${urlApi}/carts/dec`, id);
  return response.data;
});

export const deleteCart = createAsyncThunk("cart/deleteCart", async (id) => {
  await axios.delete(`${urlApi}/carts/${id}`, myToken);
  return id;
});

const CartsAdapter = createEntityAdapter({
  selectId: (cart) => cart._id,
});

const cartSlice = createSlice({
  name: "cart",
  initialState: CartsAdapter.getInitialState({
    count: 0,
  }),
  extraReducers(builder) {
    builder
      .addCase(fetchCarts.fulfilled, CartsAdapter.setAll)
      .addCase(addToCart.fulfilled, CartsAdapter.upsertOne)
      .addCase(decCartQty.fulfilled, CartsAdapter.upsertOne)
      .addCase(deleteCart.fulfilled, CartsAdapter.removeOne)
      .addCase(updateCart.fulfilled, CartsAdapter.removeAll)
      .addCase(getCartQty.fulfilled, (state, action) => {
        state.count = action.payload;
      });
  },
});

export const getCount = (state) => state.cart.count;
export const getIds = (state) => state.cart.ids;
export const getAllCarts = (state) => state.cart.carts;

export const { selectAll: selectAllCarts } = CartsAdapter.getSelectors((state) => state.cart);

export default cartSlice.reducer;
