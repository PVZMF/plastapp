import React, { useCallback, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../../assets/imgs/logo.svg";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { login, loginUserAsync, setInfo, setRole } from "../../toolkit/slices/auth";
import { Navigate, useNavigate } from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton';
import ForgetPassword from "../../components/forgetPassword";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { checkRole, infoAccount } from "../../api/api"
import { onToasted } from "../../toolkit/slices/toasted.slice";
export default function SignIn() {

  const [error, setError] = useState(false);
  const [textError, setTextError] = useState("");
  const [showForgetpass, setShowForgetpass] = useState(false);
  const [showPass, SetShowPass] = useState(false);
  const [formData, setFormData] = useState({ phone_number: "", password: "" });
  const [focus, setFocus] = useState("");

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let onSpinerButton = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    onSpinerButton = false;
    dispatch(loginUserAsync(data)).unwrap().then((res) => {
      if (res?.message === "no user with this credential   exists ") {
        setTextError("کاربری با این مشخصات وجود ندارد!");
        setError(true);
      }
      else if (res?.access) {
        dispatch(login({ access: res.access, refresh: res.refresh, tel: data.phone_number.strin }));
        checkRole(data).then(res => {
          dispatch(setRole(res.status));
        }).catch((err) => {
         
        });
        infoAccount().then(res => {
          dispatch(setInfo({ ...res }));
        })
        setError(false);
      }
      else if (res?.phone_number[0] === "این مقدار نباید خالی باشد.") {
        setTextError("شمازه تلفن الزامی است!");
        setError(true);
      }
      else if (res?.phone_number[0] === "unvalid phonenumber") {
        setTextError("شمازه تلفن اشتباه است!")
        setError(true);
      }
      else if (res?.password) {
        setTextError("پسورد الزامی است!")
        setError(true);
      }
    })
      .catch((e) => {
       
        setError(e);
      });
  }; 

  if (auth.isLogin) {
    dispatch(onToasted());
    if (auth.role === "business") {
      return <Navigate to={"/profile"} />;
    }
    return <Navigate to={"/"} />;
  }

  const CustomTextField = styled(TextField)({
    resize: {
      fontSize: "50px !important",
    },
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

  const onChangehandle = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFocus(e.target.name);
  }
  const handleClickShowPassword = () => {
    SetShowPass(old => !old);
  };
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems="center"
      bgcolor={"rgb(105, 169, 255)"}
      sx={{ margin: { xs: 1, md: 2 } }}
      width="auto"
    >
      <Grid
        Item
        bgcolor={"white"}
        sx={{
          width: { xs: "100%", sm: "80%", md: "40%" },
          margin: { xs: 3, md: 6 },
          padding: { xs: 3, md: 6 },
        }}
        height="50%"
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}> */}
          <Box
            sx={{
              width: { xs: 30, md: 60, lg: 90 },
              height: { xs: 30, md: 60, lg: 90 },
            }}
          >
            <img
              width="100%"
              height="100%"
              style={{ margin: "auto" }}
              src={logo}
            />
          </Box>
          {/* </Avatar> */}
          <Typography component="h1" variant="h5">
            ورود
          </Typography>
          {/* بازیابی رمز عبور*/}
          <Box component={"div"} marginTop={"100px"} >
            <ForgetPassword open={showForgetpass} setOpen={setShowForgetpass} />
          </Box>
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
              value={formData.phone_number}
              autoComplete="09XXXXXXXX"
              onChange={onChangehandle}
              autoFocus={focus === "phone_number" ? true : false}
            />
            <CustomTextField
              inputProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
              InputLabelProps={{ style: { fontSize: "clamp(1rem,2vw,2rem)" } }}
              autoSave
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
              onChange={onChangehandle}
              size="large"
              variant="standard"
              component="h1"
              margin="normal"
              required
              fullWidth
              name="password"
              label="پسورد"
              value={formData.password}
              type={showPass ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              autoFocus={focus === "password" ? true : false}
            />

            <Grid container display={error ? "flex" : "none"}>
              <Grid item margin={1}>
                <Typography
                  variant="body2"
                  color={"red"}
                  fontSize={"clamp(0.5rem,3vw,1rem)"}
                >
                  {textError}
                </Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs margin={1}>
                <Button onClick={() => setShowForgetpass((old) => !old)} color="blue" variant="body2" fontSize={"clamp(0.5rem,3vw,1rem)"}>
                  بازیابی رمز عبور
                </Button>
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              loading={auth.loading && onSpinerButton}
              sx={{
                margin: { xs: 1, md: 2 },
                padding: 2,
                borderRadius: 4,
                bgcolor: "rgb(105, 169, 255)",
                fontSize: "clamp(1rem,2vw,1.2rem)",
              }}
            >
              ورود
            </LoadingButton>
            <LoadingButton
              // href="/register"
              fullWidth
              variant="contained"
              loading={auth.loading && !onSpinerButton}
              sx={{
                margin: { xs: 1, md: 2 },
                padding: 2,
                borderRadius: 4,
                bgcolor: "rgb(105, 169, 255)",
                fontSize: "clamp(1rem,2vw,1.2rem)",
              }}
              onClick={() => navigate("/register")}
            >
              ثبت نام
            </LoadingButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
