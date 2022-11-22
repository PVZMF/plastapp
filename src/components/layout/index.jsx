import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "./sideBar/sideDrawer"

// Components
import Header from './header';
import Footer from './footer/Footer';
import { Grid } from '@mui/material';
import ScrollToTop from './ScrollToTop';


const Layout = () => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <ScrollToTop />
      <Header isOpenDrawer={isOpenDrawer} setOpenDrawer={setOpenDrawer}/>
      <Sidebar isOpenDrawer={isOpenDrawer} setOpenDrawer={setOpenDrawer} />
      <Grid paddingX={1} zIndex={0} display={"flex"} position={"sticky"} marginTop="100px" justifyContent={"center"} flexDirection="column">

        <Outlet />
      </Grid>
      <Footer />
    </React.Fragment>
  )
}

export default Layout