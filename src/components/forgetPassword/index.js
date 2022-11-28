import Modal from '@mui/material/Modal';
import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../../assets/imgs/logo.svg"
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAsync, registerVerifyForgetPasswordUserAsync, sendOtpForgetPasswordUserAsync } from "../../toolkit/slices/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Storage from "../../service/Storage";
// import LoadingButton from '@mui/lab/LoadingButton';
import Counter from "../../components/counter/Counter";
import { onCounter } from "../../toolkit/slices/auth"


const ForgetPassword = ({ open, setOpen }) => {

  const initialState = {
    sendOtp: { done: false, error: false, exist: false, trylater: false },
    verifyTel: { done: false, error: false, match: false },
    register: { done: false, error: false, exist: false, confirmpass: false }
  };
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();
  const st = Storage();
  const navigate = useNavigate();
  const [tel, setTel] = useState("");
  const errorApi = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loading);
  const counter = useSelector((state) => state.auth.counter)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    if (!state.sendOtp.done) {
      setTel(data.phone_number);
      Promise.all([dispatch(sendOtpForgetPasswordUserAsync(data))]).then((res) => {
        const data = res[0].payload;
        console.log(data);
        if (data.message === "code send") {
          setState({ ...state, sendOtp: { done: true, error: false, exist: false, trylater: false } });
          dispatch(onCounter(true));
        } else if (data.non_field_errors[0] === 'user already exist') {
          setState({ ...state, sendOtp: { done: false, error: false, exist: true, trylater: false } });
        }
        else if (data.non_field_errors[0] === "try later") {
          setState({ ...state, sendOtp: { done: false, error: false, exist: false, trylater: true } });
        }
      })
        .catch(error => {
          setState({ ...state, sendOtp: { done: false, error: true, exist: false, trylater: false } });
          console.log(error);
          console.log(errorApi);
        })
    } else if (!state.verifyTel.done) {
      Promise.all([dispatch(registerVerifyForgetPasswordUserAsync({ ...data, phone_number: tel }))]).then((res) => {
        const data = res[0].payload;
        if (data.message === "account confirmed") {
          setState({ ...state, verifyTel: { done: true, error: false } });
        } else if (data.non_field_errors[0] === "code expired") {
          setState({ ...state, verifyTel: { done: false, error: true, match: false } });
        }
        else if (data.non_field_errors[0] === 'code aren"t match') {
          setState({ ...state, verifyTel: { done: false, error: false, match: true } });
        }
      })
        .catch((e) => {
          console.log(e);
          setState({ ...state, verifyTel: { done: false, error: true, exist: false } });
        })
    } else if (state.register.done) {
      Promise.all([dispatch(registerUserAsync({ ...data, phone_number: tel }))]).then((res) => {
        const data = res[0].payload;
        if (data.message === "user created") {
          setState({ ...state, register: { done: true, error: false, exist: false } });
        } else if (data.phone_number) {
          setState({ ...state, register: { done: false, error: false, exist: true } });
          console.log(data.message);
        }

      })
        .catch((e) => {
          console.log(e);
          setState({ ...state, register: { done: false, error: true, exist: false } });
        })

    }
  };
  const textErrorSendOtp = () => {
    if (state.sendOtp.error) return ("شماره تلفن وارد شده صحیح نمی باشد!")
    else if (state.sendOtp.exist) return ("کاربر با این شماره تلفن از قبل موجود است")
    else if (state.sendOtp.trylater) return ("کمی بعد امتحان کنید")
  }

  const textErrorVerifyTel = () => {
    if (state.verifyTel.error) return ("کد منقضی شده! دوباره تلاش کنید!")
    else if (state.verifyTel.match) return ("کد تایید اشتباه است!")
  }


  const handleClose = () => {
    setOpen(false);
  };

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
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          marginRight: { xs: "40px", sm: "150px", md: "200px", lg: "450px" },
          marginTop: { xs: "50px", sm: "150px", md: "150px" },
          width: { xs: "250px", sm: "400px", md: "550px" },
          height: { xs: "350px", sm: "400px", md: "400px" },
          alignItems: "center",
          bgcolor: "white",
          padding:"40px"
        }}
      >
        <CustomTextField
          inputProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
          InputLabelProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
          variant="standard"
          value={state.sendOtp.done ? tel : undefined}
          disabled={state.sendOtp.done}
          margin="normal"
          required
          fullWidth
          id="tel"
          label="شماره موبایل"
          name="phone_number"
          type={"text"}
          autoComplete="09XXXXXXXX"
          autoFocus
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
          autoFocus
        />
        <CustomTextField
          inputProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
          InputLabelProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
          sx={state.verifyTel.done ? { display: "block" } : { display: "none" }}
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="tel"
          label="پسورد"
          name="password"
          type={"password"}
          autoComplete="*******"
          autoFocus
        />
        <CustomTextField
          inputProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
          InputLabelProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
          sx={state.verifyTel.done ? { display: "block" } : { display: "none" }}
          helperText="شامل حداقل ۸ کاراکتر"
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="tel"
          label="تایید پسورد"
          name="password_confirm"
          type={"text"}
          autoComplete="09XXXXXXXX"
          autoFocus
        />
        {state.sendOtp.done && counter ? <Counter count={60} /> : <></>}

        <Grid container sx={state.register.error ? { display: "block" } : { display: "none" }}>
          <Grid item xs margin={1}>
            <Typography variant="body2" color={"red"} fontSize={"clamp(0.5rem,3vw,1rem)"}>
              {state.register.exist ? "کاربر با این شماره تلفن از قبل موجود است." : "حداقل شامل ۸ کاراکتر"}
            </Typography>
          </Grid>
        </Grid>
        <Grid container display={state.sendOtp.error || state.sendOtp.exist || state.sendOtp.trylater ? "flex" : "none"}>
          <Grid item xs margin={1}>
            <Typography variant="body2" color={"red"} fontSize={"clamp(0.5rem,3vw,1rem)"}>
              {textErrorSendOtp()}
            </Typography>
          </Grid>
        </Grid>

        <Grid container display={state.verifyTel.error || state.verifyTel.match ? "flex" : "none"}>
          <Grid item xs margin={1}>
            <Typography variant="body2" color={"red"}>
              {state.verifyTel.error ?
                <Button
                  sx={{ fontSize: "clamp(0.8rem,2vw,1.2rem)" }}
                  onClick={() => { setTel(""); setState(initialState) }}>
                  {textErrorVerifyTel()}
                </Button>
                : textErrorVerifyTel()
              }
            </Typography>
          </Grid>
        </Grid>
{/* 
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          loading={loading}
          sx={{ margin: 2, padding: 2, borderRadius: 4, bgcolor: "rgb(105, 169, 255)", fontSize: "clamp(1rem,2vw,1.2rem)" }}
        >
          تایید
        </LoadingButton> */}

      </Box>
    </Modal >
  );
};

export default ForgetPassword;
