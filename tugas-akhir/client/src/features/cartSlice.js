import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0,
  },
  reducers: {
    addCartCount(state) {
      state.count += 1;
    },
  },
});

export const { addCartCount } = cartSlice.actions;

export const getCount = (state) => state.cart.count;

export default cartSlice.reducer;
