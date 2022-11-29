import Modal from '@mui/material/Modal';
import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../../assets/imgs/logo.svg"
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { ForgetPasswordUserAsync, registerVerifyForgetPasswordUserAsync, sendOtpForgetPasswordUserAsync, toggleIsChangePassword } from "../../toolkit/slices/auth";
import { useNavigate } from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton';
import Counter from "../../components/counter/Counter";
import { onCounter } from "../../toolkit/slices/auth"
import { Visibility, VisibilityOff } from '@mui/icons-material';


const ForgetPassword = ({ open, setOpen }) => {
  // State Register
  const initialState = {
    state: {
      sendOtp: { done: false, error: false },
      verifyTel: { done: false, error: false },
      register: { done: false, error: false }
    },
    formDate: {
      phone_number: "",
      password: "",
      password_confirm: ""
    }
  };

  const [state, setState] = useState(initialState.state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.loading);
  const counter = useSelector((state) => state.auth.counter)
  const [formData, setFormData] = useState(initialState.formDate);
  const [focus, setFocus] = useState("");
  const [textErrorSendOtp, setTextErrorSendOtp] = useState("");
  const [textErrorVerifyTel, setTextErrorVerifyTel] = useState("");
  const [textErrorRegister, setTextErrorRegister] = useState("");
  const [showPass, SetShowPass] = useState(false);

  const onChangehandle = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFocus(e.target.name);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    if (!state.sendOtp.done) {
      (dispatch(sendOtpForgetPasswordUserAsync(data))).unwrap().then((res) => {
        console.log(res);
        if (res.message === "code send") {
          setState({ ...state, sendOtp: { done: true, error: false } });
          dispatch(onCounter(true));
        }
        else if ("phone_number" in res) {
          if (res.phone_number[0] === 'این مقدار نباید خالی باشد.') {
            setState({ ...state, sendOtp: { done: false, error: true } });
            setTextErrorSendOtp("شماره تلفن الزامی است!");
          }
          else if (res.phone_number[0] === 'unvalid phonenumber') {
            setState({ ...state, sendOtp: { done: false, error: true } });
            setTextErrorSendOtp("شماره تلفن اشتباه است!");
          }
        }
        else if (res.non_field_errors[0] === 'user already exist') {
          setState({ ...state, sendOtp: { done: false, error: true } });
          setTextErrorSendOtp("کاربر با این شماره تلفن از قبل موجود است");
        }
        else if (res.non_field_errors[0] === "try later") {
          setState({ ...state, sendOtp: { done: false, error: true } });
          setTextErrorSendOtp("کمی بعد امتحان کنید");
        }

      })
        .catch(error => {
          console.log(error);
        })
    } else if (!state.verifyTel.done) {
      dispatch(registerVerifyForgetPasswordUserAsync({ ...data, phone_number: formData.phone_number })).unwrap().then((res) => {
        console.log(res);
        if (res.message === "account confirmed for changing password") {
          setState({ ...state, verifyTel: { done: true, error: false } });
        }
        else if ("non_field_errors" in res) {
          if (res.non_field_errors[0] === "code expired") {
            setState({ ...state, verifyTel: { done: false, error: true } });
            setTextErrorVerifyTel("کد منقضی شده! دوباره تلاش کنید!")
          }
          else if (res.non_field_errors[0] === 'code aren"t match') {
            setState({ ...state, verifyTel: { done: false, error: true } });
            setTextErrorVerifyTel("کد تایید اشتباه است!  دوباره تلاش کنید")
          }
        }
        else if (res.code[0] === "این مقدار نباید خالی باشد.") {
          setState({ ...state, verifyTel: { done: false, error: true } });
          setTextErrorVerifyTel("وارد کردن کد الزامی است!  دوباره تلاش کنید")
        }
      })
        .catch((e) => {
          setState({ ...state, verifyTel: { done: false, error: true} });
        })
    } else if (!state.register.done) {
      dispatch(ForgetPasswordUserAsync({ ...data, phone_number: formData.phone_number })).unwrap().then((res) => {
        if (res.message === "password successfully reset") {
          setState({ ...state, register: { done: true, error: false } });
          dispatch(toggleIsChangePassword())
          handleClose();
        }
        else if ("password" in res) {
          if (res.password[0] === "این مقدار نباید خالی باشد.") {
            setState({ ...state, register: { done: false, error: true } });
            setTextErrorRegister("وارد کردن پسورد الزامی است!")
          }
        }
        else if ("password_confirm" in res) {
          if (res.password_confirm[0] === "این مقدار نباید خالی باشد.") {
            setState({ ...state, register: { done: false, error: true } });
            setTextErrorRegister("وارد کردن تایید پسورد الزامی است!")
          }
        }
        else if ("non_field_errors" in res) {
          if (res.non_field_errors[0] === 'new password char must be in range 6 and 9') {
            setState({ ...state, register: { done: false, error: true } });
            setTextErrorRegister("پسورد باید بین ۶ تا ۹ کاراکتر باشد!")
          }
          else if (res.non_field_errors[0] === "{'this phone_number not confirmed'}") {
            setState({ ...state, register: { done: false, error: true } });
            setTextErrorRegister("شماره موبایل شما مجددا نیاز به تایید دارد!")
          }
          else if (res.non_field_errors[0] === "this password is same as your pld password") {
            setState({ ...state, register: { done: false, error: true } });
            setTextErrorRegister("عدم مطابقت پسورد! از درست بودن پسورد خود مطمين شوید.")
          }
        }
        else if (data.phone_number[0]) {
          setState({ ...state, register: { done: false, error: true } });
          setTextErrorRegister("کاربر با این شماره تلفن از قبل موجود است");
        }
      })
        .catch((e) => {
          console.log(e);
          setState({ ...state, register: { done: false, error: true} });
        })
    }
  };

  // Modal
  const handleClose = () => {
    setState(initialState.state);
    setFormData(initialState.formDate);
    setOpen(false);
  };

  const handleClickShowPassword = () => {
    SetShowPass(old => !old);
  };

  const CustomTextField = styled(TextField)({
    root: {
      '& .MuiFormHelperText-root': {
        color: "red"
      }
    },
    '& label': {
      transformOrigin: "right !important",
      left: "inherit !important",
      right: "1.75rem !important",
      fontSize: "small",
      color: "#807D7B",
      fontWeight: 400,
      overflow: "unset",
    }
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Grid
        bgcolor={"white"}
        sx={{
          marginRight: { xs: "40px", sm: "150px", md: "200px", lg: "450px" },
          marginTop: { xs: "50px", sm: "80px", md: "120px", lg: "150px" },
          width: { xs: "250px", sm: "400px", md: "550px" },
          height: "auto",
          alignItems: "center",
          bgcolor: "white",
          padding: "40px"
        }} height="60%">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}> */}
          <Box>
            <img
              style={{ width: "80px", height: "80px", margin: "auto" }}
              src={logo}
            />
          </Box>
          <Typography component="h1" variant="h5">
            بازیابی رمز عبور
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <CustomTextField
              inputProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
              InputLabelProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
              variant="standard"
              disabled={state.sendOtp.done}
              margin="normal"
              required
              fullWidth
              id="tel"
              label="شماره موبایل"
              name="phone_number"
              type={"text"}
              autoComplete="09XXXXXXXX"
              autoFocus={focus === "phone_number" ? true : false}
              onChange={onChangehandle}
              value={formData.phone_number}
            />
            <CustomTextField
              inputProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
              InputLabelProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
              sx={state.sendOtp.done && !state.verifyTel.done ? { display: "block" } : { display: "none" }}
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="code"
              label="کد تایید"
              name="code"
              type={"text"}
            />
            <CustomTextField
              inputProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
              InputLabelProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
              sx={state.verifyTel.done ? { display: "block" } : { display: "none" }}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  >
                    {showPass ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="tel"
              label="پسورد"
              name="password"
              type={showPass ? "text" : "password"}
              autoComplete="*******"
              autoFocus={focus === "password" ? true : false}
              onChange={onChangehandle}
              value={formData.password}
            />
            <CustomTextField
              inputProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
              InputLabelProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
              sx={state.verifyTel.done ? { display: "block" } : { display: "none" }}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  >
                    {showPass ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
              helperText="شامل حداقل ۸ کاراکتر"
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="tel"
              label="تایید پسورد"
              name="password_confirm"
              type={showPass ? "text" : "password"}
              autoComplete="09XXXXXXXX"
              autoFocus={focus === "password_confirm" ? true : false}
              onChange={onChangehandle}
              value={formData.password_confirm}
            />
            {state.sendOtp.done && counter && !state.verifyTel.done ? <Counter count={60} /> : <></>}

            <Grid container sx={state.register.error ? { display: "block" } : { display: "none" }}>
              <Grid item xs margin={1}>
                <Typography variant="body2" color={"red"} fontSize={"clamp(0.5rem,3vw,1rem)"}>
                  {textErrorRegister}
                </Typography>
              </Grid>
            </Grid>
            <Grid container display={state.sendOtp.error ? "flex" : "none"}>
              <Grid item xs margin={1}>
                <Typography variant="body2" color={"red"} fontSize={"clamp(0.5rem,3vw,1rem)"}>
                  {textErrorSendOtp}
                </Typography>
              </Grid>
            </Grid>

            <Grid container display={state.verifyTel.error ? "flex" : "none"}>
              <Grid item xs margin={1}>
                <Button
                  sx={{ fontSize: "clamp(0.8rem,2vw,1.2rem)" }}
                  onClick={() => { setState(initialState) }}>
                  <Typography variant="body2" color={"red"}>

                    {textErrorVerifyTel}
                  </Typography>
                </Button>

              </Grid>
            </Grid>

            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              loading={loading}
              sx={{ margin: 2, padding: 2, borderRadius: 4, bgcolor: "rgb(105, 169, 255)", fontSize: "clamp(1rem,2vw,1.2rem)" }}
            >
              {state.sendOtp.done && !state.verifyTel.done ? "تایید" : "ثبت نام"}
            </LoadingButton>

          </Box>
        </Box>
      </Grid>
    </Modal >
  );
};

export default ForgetPassword