import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { useState } from "react";
import Button from "@mui/material/Button";
import logo from "../../assets/imgs/logo.svg";
import TextField from "@mui/material/TextField";
import {
  isSendOtpChangePassword,
  forgetPasswordSendOtp,
} from "../../toolkit/slices/auth";
import { useDispatch, useSelector } from "react-redux";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const isSendOtpChangePassword = useSelector(
    (state) => state.auth.isSendOtpChangePassword
  );
  const isVerifyForgetPassword = useSelector(
    (state) => state.auth.isVerifyForgetPassword
  );
  const passwordChangeSuccessful = useSelector(
    (state) => state.auth.passwordChangeSuccessful
  );

  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");
  const [code, setCode] = useState("");

  const handleSubmitForget = (e) => {
    e.preventDefault();
    if (isSendOtpChangePassword) {
      const form_data = new FormData(e.target);
      const data = Object.fromEntries(form_data.entries());
      console.log("data", data);
      // Promise.all([dispatch(forgetPasswordSendOtp(phone_number))])
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch(() => {});
      // Promise.all([dispatch(forgetPasswordSendOtp(data))])
      //   .then((res) => {
      //     const data = res[0].payload;
      //     if (!data.message) {
      //     } else {
      //       new Error("Login Failed!");
      //     }
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
    }
    if (isVerifyForgetPassword) {
    }
  };
  console.log("isSendOtpChangePassword = ", isSendOtpChangePassword);
  const CustomTextField = styled(TextField)({
    "& label": {
      transformOrigin: "right !important",
      left: "inherit !important",
      right: "1.75rem !important",
      fontSize: "small",
      color: "#807D7B",
      fontWeight: 400,
      overflow: "unset",
    },
  });

  return (
    <>
      <Box
        sx={{
          width: "400px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        component="form"
        onSubmit={handleSubmitForget}
      >
        <img style={{ width: "80px", height: "80px" }} src={logo} />
        <CustomTextField
        
          // onChange={(e) => setPhone_number(e.target.value)}
          variant="standard"
          label="شماره تماس"
          sx={{ width: "70%", marginTop: "20px" }}
        />
        <CustomTextField
          // onChange={(e) => setCode(e.target.value)}
          variant="standard"
          label="کد ارسال شده"
          sx={isSendOtpChangePassword == true ? {} : { display: "none" }}
        />
        <CustomTextField
          // onChange={(e) => setPassword(e.target.value)}
          variant="standard"
          label="رمز عبور"
          sx={isVerifyForgetPassword ? {} : { display: "none" }}
        />
        <CustomTextField
          // onChange={(e) => setPasswordConfirm(e.target.value)}
          variant="standard"
          label="تایید رمز عبور"
          sx={isVerifyForgetPassword ? {} : { display: "none" }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            margin: 2,
            padding: 2,
            borderRadius: 4,
            bgcolor: "rgb(105, 169, 255)",
            width: "70%",
          }}
        >
          ارسال کد
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={
            isSendOtpChangePassword == true
              ? {
                  margin: 2,
                  padding: 2,
                  borderRadius: 4,
                  bgcolor: "rgb(105, 169, 255)",
                }
              : { display: "none" }
          }
        >
          کد ارسال شده
        </Button>
        <Button
          sx={
            isVerifyForgetPassword == true
              ? {
                  margin: 2,
                  padding: 2,
                  borderRadius: 4,
                  bgcolor: "rgb(105, 169, 255)",
                }
              : { display: "none" }
          }
          fullWidth
          variant="contained"
        >
          تفییر رمز
        </Button>
      </Box>
    </>
  );
};

export default ForgetPassword;
