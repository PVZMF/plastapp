import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

// Components
import Header from './header';
import Footer from './footer';

const Layout = () => {
  
  const pathName = useLocation().pathname;

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {pathName !== '/cart' && <Footer />}
    </>
  )
}

export default Layout