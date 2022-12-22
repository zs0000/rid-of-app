
import React, { ReactNode } from "react"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import PopMenu from "../PopMenu/PopMenu"
import s from "./Layout.module.css"

export default function Layout({children}: {children : React.ReactNode}) {
  return (
    <div  className={s.container}>
      <PopMenu/>
      <Navbar/>
        {children}
      <Footer/>
    </div>
  )
}
