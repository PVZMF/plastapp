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
import { registerUserAsync,registerVerifyUserAsync, sendOtpUserAsync } from "../../toolkit/slices/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Storage from "../../service/Storage";
import { IconButton } from "@mui/material";

const Register = () => {
    const [error, setError] = useState({
        num: false,
        send: false,
        error: false,
        check: false,
        notVerify: false,
        verify: false
    });
    const dispatch = useDispatch();
    const st = Storage();
    const navigate = useNavigate();
    const [tel, setTel] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const form_data = new FormData(e.target);
        const data = Object.fromEntries(form_data.entries());
        if (!error.check && !error.verify) {
            setTel(data.phone_number);
            Promise.all([dispatch(sendOtpUserAsync(data))]).then((res) => {
                const data = res[0].payload;
                if (data.message === "message sent") {
                    setError({ num: false, send: false, error: false, check: true, notVerify: false });
                    navigate("/register");
                } else {
                    new Error("send failed!")
                    setError({ ...error, send: true, error: true });
                }
            })
                .catch((e) => {
                    new Error("Number wrong!")
                    setError({ ...error, num: true, error: true });
                })
        } else if (!error.verify) {
            Promise.all([dispatch(registerVerifyUserAsync({ ...data, phone_number: tel }))]).then((res) => {
                const data = res[0].payload;
                if (data.message === "account confirmed") {
                    setError({ ...error, check: false, notVerify: false, verify: true })
                } else if (data.non_field_errors[0] === "code expired") {
                    new Error("code failed!")
                    setError({ ...error, error: false, check: true, notVerify: true, send: false });
                }
            })
                .catch((e) => {
                    console.log(e);
                    new Error("send failed!")
                    setError({ ...error, error: false, check: true, notVerify: true, send: true });

                })
        } else {
            Promise.all([dispatch(registerUserAsync({ ...data, phone_number: tel }))]).then((res) => {
                const data = res[0].payload;
                if (data.message === "account confirmed") {
                    setError({ ...error, check: false, notVerify: false, verify: true })
                } else if (data.non_field_errors[0] === "code expired") {
                    new Error("code failed!")
                    setError({ ...error, error: false, check: true, notVerify: true, send: false });
                }
            })
                .catch((e) => {
                    console.log(e);
                    new Error("send failed!")
                    setError({ ...error, error: false, check: true, notVerify: true, send: true });

                })

        }
    };
    const CustomTextField = styled(TextField)({
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
            <Grid Item bgcolor={"white"} width="50%" height="60%" margin={6} padding={6}>
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
                            variant="standard"
                            value={tel ? tel : undefined}
                            disabled={error.check || error.verify}
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
                            sx={error.check ? { display: "block" } : { display: "none" }}
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
                            sx={error.verify ? { display: "block" } : { display: "none" }}
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
                            sx={error.verify ? { display: "block" } : { display: "none" }}
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
                        <Grid container display={error.error ? "flex" : "none"}>
                            <Grid item xs margin={1}>
                                <Typography variant="body2" color={"red"}>
                                    {error.send ? "مشکلی پیش آمده، مجددا امتحان کنید!" : "شماره تلفن وارد شده صحیح نمی باشد!"}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container display={error.notVerify ? "flex" : "none"}>
                            <Grid item xs margin={1}>
                                <Typography variant="body2" color={"red"}>
                                    {error.send?
                                        <Button
                                            onClick={() => { setTel(""); setError({ ...error, error: false, check: false, notVerify: false, send: false }) }}>
                                            "مشکلی پیش آمده، مجددا امتحان کنید!"
                                        </Button>
                                        : "کد صحیح نمی باشد!"}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ margin: 2, padding: 2, borderRadius: 4, bgcolor: "rgb(105, 169, 255)" }}
                        >
                            {error.check || error.verify?"تایید":"ثبت نام"}
                        </Button>

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