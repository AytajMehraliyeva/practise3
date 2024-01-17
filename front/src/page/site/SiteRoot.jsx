import React from 'react'
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'
import {Outlet} from "react-router"
const SiteRoot = () => {
  return (
<>
<Header/>
<Outlet/>
<Footer/>
</>
  )
}

export default SiteRoot