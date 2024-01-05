import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";
import { urlApi } from "../../envcaller";
import { myToken } from "./token";

export const fetchAddresses = createAsyncThunk("address/fetchAddresses", async () => {
  const response = await axios.get(`${urlApi}/addresses`, myToken);
  return response.data.address;
});

export const addAddress = createAsyncThunk("address/addAddress", async (data) => {
  const response = await axios.post(`${urlApi}/addresses`, data, myToken);
  return response.data;
});

export const deleteAddress = createAsyncThunk("address/deleteAddress", async ({ id }) => {
  await axios.delete(`${urlApi}/addresses/${id}`, myToken);
  return id;
});

export const getSingleAddress = createAsyncThunk("address/getSingleAddress", async ({ id }) => {
  const response = await axios.get(`${urlApi}/addresses/${id}`, myToken);
  return response.data;
});

export const updateAddress = createAsyncThunk("address/updateAddress", async (data) => {
  const response = await axios.put(`${urlApi}/addresses/${data.id}`, data, myToken);
  return response.data;
});

const AddressesAdapter = createEntityAdapter({
  selectId: (address) => address._id,
});

const addressSlice = createSlice({
  name: "address",
  initialState: AddressesAdapter.getInitialState({
    addresses: [],
    isShowAdd: false,
    isShowUpdate: false,
  }),
  reducers: {
    ShowAddAddress(state) {
      state.isShowAdd = true;
    },
    HideAddAddress(state) {
      state.isShowAdd = false;
    },
    ShowUpdateAddress(state) {
      state.isShowUpdate = true;
    },
    HideUpdateAddress(state) {
      state.isShowUpdate = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAddresses.fulfilled, AddressesAdapter.setAll)
      .addCase(addAddress.fulfilled, AddressesAdapter.addOne)
      .addCase(deleteAddress.fulfilled, AddressesAdapter.removeOne)
      .addCase(getSingleAddress.fulfilled, AddressesAdapter.setOne)
      .addCase(updateAddress.fulfilled, AddressesAdapter.upsertOne);
  },
});

export const { selectAll: selectAllAddresses, selectById: selectAddressById } = AddressesAdapter.getSelectors(
  (state) => state.addresses
);

export const { ShowAddAddress, HideAddAddress, ShowUpdateAddress, HideUpdateAddress } = addressSlice.actions;

export const GetIsShowAdd = (state) => state.addresses.isShowAdd;
export const GetIsShowUpdate = (state) => state.addresses.isShowUpdate;

export default addressSlice.reducer;
