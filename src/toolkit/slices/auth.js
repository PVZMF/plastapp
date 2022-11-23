import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

export const loginUserAsync = createAsyncThunk(
  "auth/loginUserAsync",
  async (authData, thunkAPI) => {
    const res = await api.post("account/login/", authData);
    console.log(authData);
    return res.data;
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    firstName: "",
    lastName: "",
    token: "",
    username: "",
    isLogin: false,
    error: "",
  },
  reducers: {
    logout: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.token = "";
      state.username = "";
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserAsync.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(loginUserAsync.fulfilled, (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.isLogin = true;
      state.loading = false;
    });
    builder.addCase(loginUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
