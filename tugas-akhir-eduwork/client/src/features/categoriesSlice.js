import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { myToken } from "./token";
import { urlApi } from "../../envcaller";

export const fetchCategories = createAsyncThunk("category/fetchCategories", async () => {
  const response = await axios.get(`${urlApi}/categories`, myToken);
  return response.data.category;
});

export const addCategory = createAsyncThunk("category/addCategory", async (data) => {
  const response = await axios.post(`${urlApi}/categories`, data, myToken);
  return response.data;
});

export const deleteCategory = createAsyncThunk("category/deleteCategory", async (id) => {
  await axios.delete(`${urlApi}/categories/${id}`, myToken);
  return id;
});

export const updateCategory = createAsyncThunk("category/updateCategory", async (data) => {
  const response = await axios.put(`${urlApi}/categories/${data.id}`, data, myToken);
  console.log(response.data);
  return response.data;
});

const CategoriesAdapter = createEntityAdapter({
  selectId: (category) => category._id,
});

const categoriesSlice = createSlice({
  name: "category",
  initialState: CategoriesAdapter.getInitialState(),
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.fulfilled, CategoriesAdapter.setAll)
      .addCase(addCategory.fulfilled, CategoriesAdapter.addOne)
      .addCase(deleteCategory.fulfilled, CategoriesAdapter.removeOne)
      .addCase(updateCategory.fulfilled, CategoriesAdapter.upsertOne);
  },
});

export const { selectAll: selectAllCategories, selectById: selectCategoryById } = CategoriesAdapter.getSelectors(
  (state) => state.categories
);

export default categoriesSlice.reducer;
