import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { urlAuth } from "../../envcaller";

const token = localStorage.getItem("token");

export const fetchMe = createAsyncThunk("users/fetchMe", async () => {
  const response = await axios.get(`${urlAuth}/me`, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
});

export const logout = createAsyncThunk("users/logout", async () => {
  await axios.delete(`${urlAuth}/logout`, { headers: { Authorization: `Bearer ${token}` } });
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    me: {},
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    token: localStorage.getItem("token"),
  },
  reducers: {
    addToken(state, action) {
      state.token = localStorage.setItem("token", action.payload);
    },
    removeToken(state) {
      state.token = localStorage.removeItem("token");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.me = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = localStorage.removeItem("token");
      });
  },
});

export const { addToken, removeToken } = authSlice.actions;

export const getToken = (state) => state.auth.token;
export const getMe = (state) => state.auth.me;

export default authSlice.reducer;
