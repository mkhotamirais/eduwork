import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cfg from "../../../config";

export const fetchUsers = createAsyncThunk("auth/fetchUsers", async () => {
  try {
    const response = await axios.get(`${cfg.apiHost}/auth/admin/users`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQ3NGNmYjc0YWQ2MjAwY2ZhMzMzNmYiLCJmdWxsX25hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjk5MTcxNjU1fQ.XYzaKaG1jqQfZ8ejxKoOKvUjAVqknJO0IAulZYQS79I`,
      },
    });
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const register = createAsyncThunk("auth/register", async (initialUser) => {
  const { username, email, password } = initialUser;
  try {
    const response = await axios.post(`${cfg.apiHost}/auth/register`, {
      full_name: username,
      email,
      password,
      role: "user",
    });
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const login = createAsyncThunk("auth/login", async (initialUser) => {
  try {
    const response = await axios.post(`${cfg.apiHost}/auth/login`, initialUser);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const me = createAsyncThunk("auth/me", async (token) => {
  try {
    const response = await axios.get(`${cfg.apiHost}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: [],
    success: null,
    error: null,
    token: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        if (action.payload.error === 1) {
          state.success = null;
          state.error = action.payload.fields;
        } else {
          state.error = null;
          state.success = action.payload.message;
        }
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.error === 1) {
          state.success = null;
          state.error = action.payload.message;
        } else {
          state.success = action.payload;
          state.error = null;
          state.token = action.payload.signed;
        }
      })
      .addCase(me.fulfilled, (state, action) => {
        console.log(state.token);
      });
  },
});

export const getSuccess = (state) => state.auth.success;
export const getError = (state) => state.auth.error;

export default authSlice.reducer;
