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
import { login, loginUserAsync, registerUserAsync, registerVerifyUserAsync, sendOtpUserAsync, toggleIsCreateAccount } from "../../toolkit/slices/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Storage from "../../service/Storage";
import LoadingButton from '@mui/lab/LoadingButton';
import Counter from "../../components/counter/Counter";
import { onCounter } from "../../toolkit/slices/auth"
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { loginUser } from "../../api/api"


const Register = () => {
    // State Register
    const initialState = {
        error: false,
        sendOtp: false,
        verifyTel: false,
        register: false,
        login: false
    };
    const [state, setState] = useState(initialState);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector((state) => state.auth.loading);
    const counter = useSelector((state) => state.auth.counter);
    const [formData, setFormData] = useState({ phone_number: "", password: "", password_confirm: "" });
    const [focus, setFocus] = useState("");
    const [textError, setTextError] = useState("");
    const [textSubmitButton, setTextSubmitButton] = useState("ارسال کد");
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
        if (!state.sendOtp) {
            (dispatch(sendOtpUserAsync(data))).unwrap().then((res) => {
                console.log(res);
                if (res.message === "message sent") {
                    setState({ ...state, sendOtp: true, error: false });
                    navigate("/register");
                    dispatch(onCounter(true));
                    setTextSubmitButton("تایید");
                }
                else if (res.non_field_errors === "try later") {
                    setState({ ...state, sendOtp: false, error: true });
                    setTextError("کمی بعد امتحان کنید");
                }
                else if ("phone_number" in res) {
                    if (res["phone_number"][0] === 'این مقدار نباید خالی باشد.') {
                        setState({ ...state, sendOtp: false, error: true });
                        setTextError("شماره تلفن الزامی است!");
                    }
                    else if (res["phone_number"][0] === 'unvalid phonenumber') {
                        setState({ ...state, sendOtp: false, error: true });
                        setTextError("شماره تلفن اشتباه است!");
                    }
                }
                else if (res.non_field_errors[0] === 'user already exist') {
                    setState({ ...state, sendOtp: false, error: true });
                    setTextError("کاربر با این شماره تلفن از قبل موجود است");
                }

            })
                .catch(e => {
                    console.log(e);
                    setState({ ...state, sendOtp: false, error: true });
                    setTextError("ارتباط با سرور مقدور نیست!");
                })
        } else if (!state.verifyTel) {
            dispatch(registerVerifyUserAsync({ ...data, phone_number: formData.phone_number })).unwrap().then((res) => {
                if (res.message === "account confirmed") {
                    setState({ ...state, verifyTel: true, error: false });
                    setTextSubmitButton("ثبت نام")
                }
                else if ("non_field_errors" in res) {
                    if (res.non_field_errors[0] === "code expired") {
                        setState({ ...state, verifyTel: false, error: true });
                        setTextError("کد منقضی شده! دوباره تلاش کنید!")
                    }
                    else if (res.non_field_errors[0] === 'code aren"t match') {
                        setState({ ...state, verifyTel: false, error: true });
                        setTextError("کد تایید اشتباه است!  دوباره تلاش کنید")
                    }
                }
                else if (res.code[0] === "این مقدار نباید خالی باشد.") {
                    setState({ ...state, verifyTel: false, error: true });
                    setTextError("وارد کردن کد الزامی است!  دوباره تلاش کنید")
                }
            })
                .catch(e => {
                    setState({ ...state, verifyTel: false, error: true });
                    setTextError("ارتباط با سرور مقدور نیست!");
                    console.log(e);
                })
        } else if (!state.register) {
            dispatch(registerUserAsync({ ...data, phone_number: formData.phone_number })).unwrap().then((res) => {
                if (res.message === "user created") {
                    setState({ ...state, register: true, error: false });
                    dispatch(toggleIsCreateAccount());
                    setTextSubmitButton("ورود");
                }
                else if ("password" in res) {
                    if (res.password === "این مقدار نباید خالی باشد.") {
                        setState({ ...state, register: false, error: true });
                        setTextError("وارد کردن پسورد الزامی است!")
                    }
                }
                else if ("password_confirm" in res) {
                    if (res.password_confirm === "این مقدار نباید خالی باشد.") {
                        setState({ ...state, register: false, error: true });
                        setTextError("وارد کردن تایید پسورد الزامی است!")
                    }
                }
                else if ("non_field_errors" in res) {
                    if (res.non_field_errors[0] === 'new password char must be in range 6 and 9') {
                        setState({ ...state, register: false, error: true });
                        setTextError("پسورد باید بین ۶ تا ۹ کاراکتر باشد!")
                    }
                    else if (res.non_field_errors[0] === "{'this phone_number not confirmed'}") {
                        setState({ ...state, register: false, error: true });
                        setTextError("شماره موبایل شما مجددا نیاز به تایید دارد!")
                    }
                    else if (data.password !== data.confirmpass) {
                        setState({ ...state, register: false, error: true });
                        setTextError("عدم مطابقت پسورد! از درست بودن پسورد خود مطمين شوید.")
                    }


                }

            })
                .catch((e) => {
                    console.log(e);
                    setState({ ...state, register: false, error: true });
                    setTextError("ارتباط با سرور مقدور نیست!");

                })
        }

        else {
            dispatch(loginUserAsync(formData)).unwrap().then((res) => {

                if (res?.message === "no user with this credential   exists ") {
                    setState({ ...state, login: false, error: true });
                    setTextError("کاربری با این مشخصات وجود ندارد!");
                }
                else if (res?.access) {
                    setState({ ...state, login: true, error: false });
                    dispatch(login({ access: res.access, refresh: res.refresh, tel: data.phone_number }));
                    navigate("/roleselect");
                }
            })
        }
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
        <Grid container justifyContent={"center"} alignItems="center" bgcolor={"rgb(105, 169, 255)"} sx={{ margin: { xs: 1, md: 2 } }} width="auto">
            <Grid Item bgcolor={"white"} sx={{ width: { xs: "100%", sm: "80%", md: "50%" }, margin: { xs: 3, md: 6 }, padding: { xs: 3, md: 6 } }} height="60%">
                <CssBaseline />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}> */}
                    <Box>
                        <img
                            style={{ width: "80px", height: "80px", margin: "auto" }}
                            src={logo}
                        />
                    </Box>
                    {/* </Avatar> */}
                    <Typography component="h1" variant="h5">
                        ثبت نام
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
                            disabled={state.sendOtp}
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
                            sx={state.sendOtp && !state.verifyTel ? { display: "block" } : { display: "none" }}
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
                            sx={state.verifyTel && !state.register ? { display: "block" } : { display: "none" }}
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
                            sx={state.verifyTel && !state.register ? { display: "block" } : { display: "none" }}
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
                        {state.sendOtp && counter && !state.verifyTel ? <Counter count={60} /> : <></>}

                        <Grid container display={state.error ? "flex" : "none"}>
                            <Grid item xs margin={1}>
                                <Button
                                    sx={{ fontSize: "clamp(0.8rem,2vw,1.2rem)" }}
                                    onClick={() => { setState(initialState) }}>
                                    <Typography variant="body2" color={"red"}>
                                        {textError}
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
                            {textSubmitButton}
                        </LoadingButton>

                        <Grid container>
                            <Grid item xs margin={1}>
                                <Link href="#" variant="body2">
                                    ورود شما به معنای پذیرش شرایط پلاست اپ و قوانین حریم خصوصی است.
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Register