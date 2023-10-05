import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await axios.get(`http://localhost:3000/api/categories`);
    return response.data.data;
  }
);

const categoryEntity = createEntityAdapter({
  selectId: (category) => category._id,
});

const categorySlice = createSlice({
  name: "category",
  initialState: categoryEntity.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      categoryEntity.setAll(state, action.payload);
    });
  },
});

export const categorySelector = categoryEntity.getSelectors(
  (state) => state.category
);
export default categorySlice.reducer;
