import React, { useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "./sideBar/sideDrawer"

// Components
import Header from './header';
import Footer from './footer/Footer';
import { Grid } from '@mui/material';


const Layout = () => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Header isOpenDrawer={isOpenDrawer} setOpenDrawer={setOpenDrawer}/>
      <Sidebar isOpenDrawer={isOpenDrawer} setOpenDrawer={setOpenDrawer} />
        <Grid paddingX={1} zIndex={0} position={"relative"} marginTop="150px">
          <Outlet />
        </Grid>
      <Footer />
    </React.Fragment>
  )
}

export default Layout