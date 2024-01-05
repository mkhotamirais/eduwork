import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { urlApi } from "../../envcaller";
import { myToken } from "./token";

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const response = await axios.get(`${urlApi}/tags`, myToken);
  return response.data.tag;
});

export const addTag = createAsyncThunk("tags/addTag", async (data) => {
  const response = await axios.post(`${urlApi}/tags`, data, myToken);
  return response.data;
});

export const deleteTag = createAsyncThunk("tags/deleteTag", async (id) => {
  await axios.delete(`${urlApi}/tags/${id}`, myToken);
  return id;
});

export const updateTag = createAsyncThunk("tags/updateTag", async (data) => {
  const response = await axios.put(`${urlApi}/tags/${data.id}`, data, myToken);
  return response.data;
});

const TagsAdapter = createEntityAdapter({
  selectId: (tag) => tag._id,
});

const tagsSlice = createSlice({
  name: "tags",
  initialState: TagsAdapter.getInitialState(),
  extraReducers(builder) {
    builder
      .addCase(fetchTags.fulfilled, TagsAdapter.setAll)
      .addCase(addTag.fulfilled, TagsAdapter.addOne)
      .addCase(deleteTag.fulfilled, TagsAdapter.removeOne)
      .addCase(updateTag.fulfilled, TagsAdapter.upsertOne);
  },
});

export const { selectAll: selectAllTags, selectById: selectTagsByid } = TagsAdapter.getSelectors((state) => state.tags);

export default tagsSlice.reducer;
