import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "./sideBar/sideDrawer"
import Toasted from "../toasted/Toasted"
// Components
import Header from './header';
import Footer from './footer/Footer';
import { CssBaseline, Grid } from '@mui/material';
import ScrollToTop from './ScrollToTop';
import { useSelector } from 'react-redux';


const Layout = () => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const createAccount = useSelector((state) => state.toasted.isCreateAccount);
  const changePassword = useSelector((state) => state.toasted.isChangePassword);
  const acceptCheque = useSelector((state) => state.toasted.acceptCheque)
  const notAcceptCheque = useSelector((state) => state.toasted.notAcceptCheque)
  const conditionToast = createAccount || changePassword || acceptCheque || notAcceptCheque;
  
  return (
    <React.Fragment>
      <CssBaseline />

      <ScrollToTop />
      <Header isOpenDrawer={isOpenDrawer} setOpenDrawer={setOpenDrawer} />
      <Sidebar isOpenDrawer={isOpenDrawer} setOpenDrawer={setOpenDrawer} />
      <Toasted title={"ورود به حساب کاربری با موفقیت انجام شد."} open={isLogin && !conditionToast} severity={"success"} />
      <Toasted title={"خروج از حساب کاربری."} open={!isLogin && !conditionToast} severity={"warning"} />
      <Toasted title={"ثبت نام با موفقیت انجام شد."} open={createAccount} severity={"success"} />
      <Toasted title={"تغییر پسورد با موفقیت انجام شد."} open={changePassword} severity={"success"} />
      <Toasted title={"چک با موفقیت ثبت شد."} open={acceptCheque} severity={"success"} />
      <Toasted title={"همه فیلدها را کامل کنید."} open={notAcceptCheque} severity={"warning"} />
      <Grid zIndex={0}>
        <Outlet />
      </Grid>
      <Footer />
    </React.Fragment>
  )
}

export default Layout