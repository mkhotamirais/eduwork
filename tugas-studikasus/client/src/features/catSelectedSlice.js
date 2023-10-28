import { createSlice } from "@reduxjs/toolkit";

const catSelectedSlice = createSlice({
  name: "catSelected",
  initialState: {
    cat: "",
  },
  reducers: {
    getCat: (state, action) => {
      state.cat = action.payload;
    },
  },
});

export const { getCat } = catSelectedSlice.actions;
export default catSelectedSlice.reducer;
