import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "./sideBar/sideDrawer"

// Components
import Header from './header';
import Footer from './footer';

const Layout = () => {
    const [isOpenDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Header isOpenDrawer={isOpenDrawer} setOpenDrawer={setOpenDrawer}/>
      <Sidebar isOpenDrawer={isOpenDrawer} setOpenDrawer={setOpenDrawer} />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout