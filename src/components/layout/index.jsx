import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "./sideBar/sideDrawer"

// Components
import Header from './header';
import Footer from './footer/Footer';
import { CssBaseline, Grid } from '@mui/material';
import ScrollToTop from './ScrollToTop';


const Layout = () => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline/>
      <ScrollToTop />
      <Header isOpenDrawer={isOpenDrawer} setOpenDrawer={setOpenDrawer} />
      <Sidebar isOpenDrawer={isOpenDrawer} setOpenDrawer={setOpenDrawer} />
      <Grid zIndex={0}>
        <Outlet />
      </Grid>
      <Footer />
    </React.Fragment>
  )
}

export default Layout