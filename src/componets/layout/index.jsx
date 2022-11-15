import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import Footer from './footer'
import Header from './header'
import Box from "@mui/material/Box";

const Layout = () => {

  return (
    <Box>
      <Header />
      <CssBaseline />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout