import React from 'react'
import { Outlet } from 'react-router'

// Components
import Header from './header';
import Footer from './footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>{Outlet}</main>
      <Footer />
    </>
  )
}

export default Layout