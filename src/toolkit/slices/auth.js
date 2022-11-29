import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import api from "../../api/axios";
import apiLogin from "../../api/axiosLogin"
import Storage from "../../service/Storage";

export const loginUserAsync = createAsyncThunk(
  "auth/loginUserAsync",
  async (authData, thunkAPI) => {
    try {
      const res = await api.post("account/login/", authData)
      return res?.data;
    } catch (err) {
      return err.response.data
    }

  }
);

export const registerVerifyForgetPasswordUserAsync = createAsyncThunk(
  "auth/registerVerifyForgetPasswordUserAsync",
  async (verifyCode) => {
    try {
      const res = await api.post("account/forget_password_verify/", verifyCode);
      return res?.data;
    } catch (err) {
      return err.response.data
    }
  }
)

export const sendOtpForgetPasswordUserAsync = createAsyncThunk(
  "auth/sendOtpForgetPasswordUserAsync",
  async (verifyTel, thunkAPI) => {
    try {
      const res = await api.post("account/forget_password_send_otp/", verifyTel);
      return res?.data;
    } catch (err) {
      return err.response.data
    }
  }
);

export const ForgetPasswordUserAsync = createAsyncThunk(
  "auth/ForgetPasswordUserAsync",
  async (changePass, thunkAPI) => {
    try {
      const res = await api.post("account/forget_password/", changePass);
      return res?.data;
    } catch (err) {
      return err.response.data
    }
  }
);

export const sendOtpUserAsync = createAsyncThunk(
  "auth/sendOtpUserAsync",
  async (verifyCode) => {
    try {
      const res = await api.post("account/send_otp/", verifyCode);
      return res?.data;
    } catch (err) {
      return err.response.data
    }
  }
);

export const registerVerifyUserAsync = createAsyncThunk(
  "auth/registerVerifyUserAsync",
  async (verifyCode) => {
    try {
      const res = await api.post("account/verify_register/", verifyCode);
      return res?.data;
    } catch (err) {
      return err.response.data
    }
  }
)

export const registerUserAsync = createAsyncThunk(
  "auth/registerUserAsync",
  async (verifyCode) => {
    try {
      const res = await api.post("account/register/", verifyCode);
      return res?.data;
    } catch (err) {
      return err.response.data
    }
  }
)


export const logoutUserAsync = createAsyncThunk(
  "auth/logoutUserAsync",
  async () => {
    const res = await apiLogin.post("account/logout/");
    return res?.data;
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
    onToasted: false,
    counter: false,
    isCreateAccount: false
  },
  reducers: {
    login: (state, action) => {
      const st = Storage();
      st.setLogin(action.payload.access, action.payload.refresh);
      state.isLogin = true;
      state.onToasted = true
    },
    logout: (state) => {
      const st = Storage();
      st.setLogout();
      state.firstName = "";
      state.lastName = "";
      state.token = "";
      state.username = "";
      state.isLogin = false;
      state.onToasted = true
    },
    offToasted: (state) => {
      state.onToasted = false;
    },
    onCounter: (state, action) => {
      state.counter = action.payload;
    },
    toggleIsCreateAccount: (old) => !old
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
      state.error = action;
    });
    builder.addCase(sendOtpUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action;

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
      state.error = action.payload;
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
      console.log(action);
      state.loading = false;
      state.error = action;
    });
  },
});

export const { logout, login, offToasted, onCounter, toggleIsCreateAccount } = authSlice.actions;

export default authSlice.reducer;
