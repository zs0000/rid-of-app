import Link from "next/link";
import { useState } from "react";
import s from "./PopMenu.module.css"

function PopMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = async(e) => {
    e.stopPropagation()
    try {
      setMenuOpen(!menuOpen)     
    } catch (error) {
      throw new Error
    }
  }
  return (
    
      <div className={s.menublob} onClickCapture={(e) => handleMenuClick(e) }>
        <div className={menuOpen ? s.menu : "hidden"}>
          <div className={s.itembox}>
          <Link className={s.item} href="/">
            Home
          </Link>
          </div>
          <div className={s.itembox}>
          <Link className={s.item} href="/dashboard">
            Dashboard
          </Link>
          </div>
          <div className={s.itembox}>
          <Link className={s.item} href="/available/">
            Available
          </Link>
          </div>
          <div className={s.itembox}>
          <Link className={s.item} href="/create-listing">
            List item
          </Link>
          </div>
        </div>
      </div>
    
  )
}

export default PopMenu