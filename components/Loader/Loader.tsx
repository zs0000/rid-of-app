import React from 'react'
import s from "./Loader.module.css"
function Loader() {
  return (
    <div className={s.container}>
        <div className={s.loading}>
            Loading, please wait...
        </div>
    </div>
  )
}

export default Loader