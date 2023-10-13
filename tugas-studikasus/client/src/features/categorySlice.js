import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    const response = await axios.get(`http://localhost:3000/api/categories`);
    return response.data.category;
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

export const categorySelectors = categoryEntity.getSelectors(
  (state) => state.category
);
export default categorySlice.reducer;
