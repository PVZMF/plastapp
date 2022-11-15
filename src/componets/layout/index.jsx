import React from 'react'
import Footer from './footer'
import Header from './header'

const Layout = ({ children }) => {

  return (
    <div>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout