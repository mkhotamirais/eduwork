import { createSlice } from "@reduxjs/toolkit";

const useractionSlice = createSlice({
  name: "useraction",
  initialState: {
    value: false,
  },
  reducers: {
    muncul: (state) => {
      state.value = true;
    },
    hilang: (state) => {
      state.value = false;
    },
    munculhilang: (state) => {
      state.value = !state.value;
    },
  },
});

export const { muncul, hilang, munculhilang } = useractionSlice.actions;
export default useractionSlice.reducer;
