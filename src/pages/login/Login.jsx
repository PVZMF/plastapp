import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../../assets/imgs/logo.svg"
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { login, loginUserAsync } from "../../toolkit/slices/auth";
import { Navigate, useNavigate } from "react-router-dom";
import Storage from "../../service/Storage";

export default function SignIn() {
  const [error, setError] = useState(false);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const st = Storage();


  const handleSubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    Promise.all([dispatch(loginUserAsync(data))]).then((res) => {
      const data = res[0].payload;
      if (!data.message) {
        st.setLogin(data.refresh, data.accsess);
        console.log(data);
        dispatch(login());
        navigate("/");
      } else {
        new Error("Login Failed!");
        setError(true);
      }
    })
      .catch((e) => {
        console.log(e);
        console.log("Error")
        setError(true);
      })
  };
  if (isLogin) {
    return <Navigate to={"/"} />;
  }

  const CustomTextField = styled(TextField)({
    resize: {
      fontSize: "50px !important"
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
    <Grid container justifyContent={"center"} alignItems="center" bgcolor={"rgb(105, 169, 255)"} margin={2} width="auto">
      <Grid Item bgcolor={"white"} sx={{width:{xs:"100%",sm:"80%",md:"50%"}}} height="60%" margin={6} padding={6}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}> */}
          <Box width={"clamp(10px,5vw,60px"} height={"clamp(10px,5vw,60px"}>
            <img
              width= "100%"
              height="100%"
              style={{margin: "auto" }}
              src={logo}
            />
          </Box>
          {/* </Avatar> */}
          <Typography component="h1" variant="h5">
            ورود
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
              margin="normal"
              required
              fullWidth
              id="tel"
              label="شماره موبایل"
              name="phone_number"
              type={"tel"}
              autoComplete="09XXXXXXXX"
              autoFocus
            />
            <CustomTextField
              inputProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
              InputLabelProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
              size="large"
              variant="standard"
              component="h1"
              margin="normal"
              required
              fullWidth
              name="password"
              label="پسورد"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid container display={error ? "flex" : "none"}>
              <Grid item xs margin={1}>
                <Typography variant="body2" color={"red"}>
                  نام کاربری یا کلمه عبور اشتباه است
                </Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs margin={1}>
                <Link href="#" variant="body2" fontSize={"clamp(0.5rem,3vw,1rem)"}>
                  بازیابی رمز عبور
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ margin: 2, padding: 2, borderRadius: 4, bgcolor: "rgb(105, 169, 255)",fontSize:"clamp(1rem,2vw,1.2rem)" }}
            >
              ورود
            </Button>
            <Button
              // href="/register"
              fullWidth
              variant="contained"
              sx={{ margin: 2, padding: 2, borderRadius: 4, bgcolor: "rgb(105, 169, 255)" ,fontSize:"clamp(1rem,2vw,1.2rem)"}}
              onClick={() => navigate("/register")}

            >
                ثبت نام
            </Button>

          </Box>
        </Box>
      </Grid>
    </Grid >
  );
}

