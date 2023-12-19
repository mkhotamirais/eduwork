import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    q: "",
  },
  reducers: {
    inputQ: (state, action) => {
      state.q = action.payload;
    },
  },
});

export const { inputQ } = searchSlice.actions;

export default searchSlice.reducer;
