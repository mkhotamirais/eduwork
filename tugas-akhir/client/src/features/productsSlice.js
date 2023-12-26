import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { urlApi } from "../../envcaller";
import { myToken } from "./token";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  try {
    const response = await axios.get(`${urlApi}/products`);
    console.log(response.data.products);
    return response.data.products;
  } catch (error) {
    return error;
  }
});

export const addProduct = createAsyncThunk("products/addProduct", async (data) => {
  try {
    const response = await axios.post(`${urlApi}/products`, data, myToken);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
  try {
    await axios.delete(`${urlApi}/products/${id}`, myToken);
    return id;
  } catch (error) {
    return error;
  }
});

export const updateProduct = createAsyncThunk("products/updateProduct", async (data) => {
  try {
    const response = await axios.put(`${urlApi}/products/${data.id}`, data, myToken);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
});

const ProductsAdapter = createEntityAdapter({
  selectId: (product) => product._id,
  // sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const productsSlice = createSlice({
  name: "products",
  initialState: ProductsAdapter.getInitialState({
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    token: localStorage.getItem("token") || null,
    error: null,
    isShowAddProduct: false,
    isShowUpdateProduct: false,
  }),
  reducers: {
    ShowAddProduct(state) {
      state.isShowAddProduct = true;
    },
    HideAddProduct(state) {
      state.isShowAddProduct = false;
    },
    ShowUpdateProduct(state) {
      state.isShowUpdateProduct = true;
    },
    HideUpdateProduct(state) {
      state.isShowUpdateProduct = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (action?.payload.name === "AxiosError") {
          state.status = "failed";
          state.error = action.payload.message;
        } else {
          state.status = "succeeded";
          ProductsAdapter.setAll(state, action.payload);
        }
      });
    // .addCase(addProduct.fulfilled, ProductsAdapter.addOne);
  },
});

export const {
  selectAll: selectAllProducts,
  // selectById: selectPostById,
  // selectIds: selectPostIds,
} = ProductsAdapter.getSelectors((state) => state.products);

export const { ShowAddProduct, ShowUpdateProduct, HideAddProduct, HideUpdateProduct } = productsSlice.actions;

export const getStatus = (state) => state.products.status;
export const getError = (state) => state.products.error;
export const GetIsShowAddProduct = (state) => state.products.isShowAddProduct;
export const GetIsShowUpdateProduct = (state) => state.products.isShowUpdateProduct;

export default productsSlice.reducer;
