import React, { useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "./sideBar/sideDrawer"

// Components
import Header from './header';
import Footer from './footer/Footer';
import { Grid, Box } from '@mui/material';


const Layout = () => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Header isOpenDrawer={isOpenDrawer} setOpenDrawer={setOpenDrawer} />
      <Sidebar isOpenDrawer={isOpenDrawer} setOpenDrawer={setOpenDrawer} />
      <Grid paddingX={1} zIndex={0} display={"flex"} position={"sticky"} marginTop="100px" justifyContent={"center"} flexDirection="column">

        <Outlet />
      </Grid>
      <Footer />
    </React.Fragment>
  )
}

export default Layout