import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import api from "../../api/axios";
import apiLogin from "../../api/axiosLogin"
import Storage from "../../service/Storage";

export const loginUserAsync = createAsyncThunk(
  "auth/loginUserAsync",
  async (authData, thunkAPI) => {
    try {
      const res = await api.post("account/login/", authData)
      console.log(res)
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
    role: "",
    token: "",
    username: "",
    isLogin: false,
    error: "",
    onToasted: false,
    counter: false,
    isCreateAccount: false,
    isChangePassword: false,
  },
  reducers: {
    login: (state, action) => {
      const st = Storage();
      st.setLogin(action.payload.refresh,action.payload.access);
      state.isLogin = true;
      state.onToasted = true;
      state.username = action.payload.tel;

    },
    logout: (state) => {
      logoutUserAsync();
      const st = Storage();
      st.setLogout();
      state.firstName = "";
      state.lastName = "";
      state.token = "";
      state.username = "";
      state.isLogin = false;
      state.onToasted = true
    },
    setRole: (state,action) => {
      state.role = action.payload;
    },
    offToasted: (state) => {
      state.onToasted = false;
      state.isChangePassword = false;
      state.isCreateAccount = false;
    },
    onCounter: (state, action) => {
      state.counter = action.payload;
    },
    toggleIsCreateAccount: (state) =>{
      state.isCreateAccount = true;
      state.onToasted = true
    },
    toggleIsChangePassword: (state)=>{
      state.isChangePassword = true;
      state.onToasted = true
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
      state.loading = false;
      state.error = action;
    });

    //forgetPassword
    builder.addCase(ForgetPasswordUserAsync.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(ForgetPasswordUserAsync.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(ForgetPasswordUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action;
    });

    //sendOTPForgetPassword
    builder.addCase(sendOtpForgetPasswordUserAsync.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(sendOtpForgetPasswordUserAsync.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(sendOtpForgetPasswordUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action;
    });
    
    //ForgetPassword
    builder.addCase(registerVerifyForgetPasswordUserAsync.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(registerVerifyForgetPasswordUserAsync.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(registerVerifyForgetPasswordUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action;
    });
  },
});

export const { logout, login, offToasted, onCounter, toggleIsCreateAccount,toggleIsChangePassword, setRole} = authSlice.actions;

export default authSlice.reducer;
