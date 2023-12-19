import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

// export const getUsers = createAsyncThunk("users/getUsers", async () => {
//   const response = await axios.get(`http://localhost:3000/auth/admin/users`, {
//     headers: {
//       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQ3NGNmYjc0YWQ2MjAwY2ZhMzMzNmYiLCJmdWxsX25hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjk5MTcxNjU1fQ.XYzaKaG1jqQfZ8ejxKoOKvUjAVqknJO0IAulZYQS79I`,
//     },
//   });
//   console.log(response.data);
//   return response.data.users;
// });

export const register = createAsyncThunk("user/register", async (param) => {
  const { full_name, email, password } = param;
  try {
    const response = await axios.post(
      `http://localhost:3000/auth/register`,
      {
        full_name,
        email,
        password,
        role: "user",
      },
      {
        headers: {
          // "Content-Type": "application/x-www-form-urlencoded",
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
});

// export const login = createAsyncThunk("user/login", async (email, password) => {
//   return await axios
//     .post(`http://localhost:3000/auth/login/`, {
//       email,
//       password,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }
//       return response.data;
//     });
// });

// export const logout = createAsyncThunk("user/logout", async () => {
//   localStorage.removeItem("user");
//   return await axios.post(`http://localhost:3000/auth/logout/`);
// });

const usersEntity = createEntityAdapter({
  selectId: (users) => users._id,
});
// const usersEntity = createEntityAdapter();

export const authSlice = createSlice({
  name: "auth",
  initialState: usersEntity.getInitialState(),
  extraReducers: (builder) => {
    builder
      // .addCase(getUsers.fulfilled, (state, action) => {
      //   usersEntity.setAll(state, action.payload);
      // })
      .addCase(register.fulfilled, (state, action) => {
        usersEntity.addOne(state, action.payload);
      });
  },
});

export const usersSelectors = usersEntity.getSelectors((state) => state.auth);
export default authSlice.reducer;

// export function authHeader() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   if (user && user.accessToken) {
//     return { Authorization: "Bearer " + user.accessToken };
//     // return { 'x-access-token': user.accessToken };
//   } else {
//     return {};
//   }
// }
