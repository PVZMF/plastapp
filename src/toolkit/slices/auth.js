import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";
import Storage from "../../service/Storage";

export const loginUserAsync = createAsyncThunk(
  "auth/loginUserAsync",
  async (authData, thunkAPI) => {
    const res = await api.post("account/login/", authData);
    return res.data;
  }
);

export const sendOtpUserAsync = createAsyncThunk(
  "auth/sendOtpUserAsync",
  async (verifyTel, thunkAPI) => {
    const res = await api.post("account/send_otp/", verifyTel);
    return res.data;
  }
);

export const registerVerifyUserAsync = createAsyncThunk(
  "auth/registerVerifyUserAsync",
  async (verifyCode) => {
    const res = await api.post("account/verify_register/", verifyCode);
    return res.data;
  }
)

export const registerUserAsync = createAsyncThunk(
  "auth/registerUserAsync",
  async (verifyCode) => {
    const res = await api.post("account/register/", verifyCode);
    return res.data;
  }
)

export const logoutUserAsync = createAsyncThunk(
  "auth/logoutUserAsync",
  async () => {
    const res = await api.post("account/logout/");
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
    onToasted: false
  },
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      const st = Storage();
      st.setLogout();
      state.firstName = "";
      state.lastName = "";
      state.token = "";
      state.username = "";
      state.isLogin = false;
    },
    setToasted: (state,action) => {
      state.onToasted = action.payload;
    }
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
      state.loading = false;
    });
    builder.addCase(loginUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action;
    });

    //SendOtp
    builder.addCase(sendOtpUserAsync.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(sendOtpUserAsync.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(sendOtpUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //RegisterVerify
    builder.addCase(registerVerifyUserAsync.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(registerVerifyUserAsync.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(registerVerifyUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //Register
    builder.addCase(registerUserAsync.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(registerUserAsync.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(registerUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { logout, login } = authSlice.actions;

export default authSlice.reducer;
