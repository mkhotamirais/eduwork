import { createSlice } from "@reduxjs/toolkit";

const tagSelectedSlice = createSlice({
  name: "tagSelected",
  initialState: {
    tags: [],
  },
  reducers: {
    tagsPush: (state, action) => {
      //   state.tags = [...state.tags, action.payload];
      state.tags.push(action.payload);
    },
    tagsFilter: (state, action) => {
      state.tags = state.tags.filter((item) => item != action.payload);
    },
  },
});

export const { tagsPush, tagsFilter } = tagSelectedSlice.actions;
export default tagSelectedSlice.reducer;
