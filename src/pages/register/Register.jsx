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
import { registerVerifyUserAsync, registerUserAsync } from "../../toolkit/slices/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Storage from "../../service/Storage";
import { IconButton } from "@mui/material";

const Register = () => {
    const [error, setError] = useState({
        num: false,
        send: false,
        error: false,
        check: false,
        verify: false
    });
    const dispatch = useDispatch();
    const st = Storage();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form_data = new FormData(e.target);
        const data = Object.fromEntries(form_data.entries());
        if (!error.check) {
            Promise.all([dispatch(registerUserAsync(data))]).then((res) => {
                const data = res[0].payload;
                if (data.message === "message sent") {
                    navigate("/register");
                    setError({ num: false, send: false, error: false, check: true, verify: false });
                } else {
                    new Error("send failed!")
                    setError({ ...error, send: true, error: true });
                }
            })
                .catch((e) => {
                    new Error("Number wrong!")
                    setError({ ...error, num: true, error: true });
                })
        } else {
            Promise.all([dispatch(registerVerifyUserAsync(data))]).then((res) => {
                const data = res;
                console.log(data)
                if (data.message === "account confirmed") {
                    navigate("/");
                } else if (data.non_field_errors[0] === "code expired") {
                    new Error("code failed!")
                    setError({ ...error, error: false, check: true, verify: true, send: false });
                }
            })
                .catch((e) => {
                    console.log(e);
                    new Error("send failed!")
                    setError({ ...error, error: false, check: true, verify: true, send: true });

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
                        <Grid container display={error.error ? "flex" : "none"}>
                            <Grid item xs margin={1}>
                                <Typography variant="body2" color={"red"}>
                                    {error.send ? "مشکلی پیش آمده، مجددا امتحان کنید!" : "شماره تلفن وارد شده صحیح نمی باشد!"}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container display={error.verify ? "flex" : "none"}>
                            <Grid item xs margin={1}>
                                <Typography variant="body2" color={"red"}>
                                    {error.send ? <Button onClick={() => setError({ ...error, error: false, check: false, verify: false, send: false })}> "مشکلی پیش آمده، مجددا امتحان کنید!" </Button> : "کد صحیح نمی باشد!"}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ margin: 2, padding: 2, borderRadius: 4, bgcolor: "rgb(105, 169, 255)" }}
                        >
                            ثبت نام
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