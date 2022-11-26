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
  return (
    <React.Fragment>
      <CssBaseline />

      <ScrollToTop />
      <Header isOpenDrawer={isOpenDrawer} setOpenDrawer={setOpenDrawer} />
      <Sidebar isOpenDrawer={isOpenDrawer} setOpenDrawer={setOpenDrawer} />
      <Toasted title={"ورود به حساب کاربری با موفقیت انجام شد."} open={isLogin} severity={"success"} />
      <Toasted title={"خروج از حساب کاربری."} open={!isLogin} severity={"warning"} />

      <Grid zIndex={0}>
        <Outlet />
      </Grid>
      <Footer />
    </React.Fragment>
  )
}

export default Layout