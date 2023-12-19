import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";
import cfg from "../../config";

export const getTags = createAsyncThunk("tags/gatTags", async () => {
  return (await axios.get(`${cfg.apiHost}/api/tags`)).data.tag;
});

const tagsEntity = createEntityAdapter({
  selectId: (tags) => tags._id,
});

const tagSlice = createSlice({
  name: "tags",
  initialState: tagsEntity.getInitialState,
  extraReducers: (builder) => {
    builder.addCase(getTags.fulfilled, (state, action) => {
      tagsEntity.setAll(state, action.payload);
    });
  },
});

export const tagsSelectors = tagsEntity.getSelectors((state) => state.tags);
export default tagSlice.reducer;
