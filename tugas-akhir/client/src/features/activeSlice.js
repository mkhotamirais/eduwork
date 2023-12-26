import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({
  name: "active",
  initialState: {
    aktif: null,
  },
  reducers: {
    setAktif(state, action) {
      state.aktif = action.payload;
    },
  },
});

export const { setAktif } = activeSlice.actions;

export const getAktif = (state) => state.active.aktif;

export default activeSlice.reducer;
