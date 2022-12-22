import React from 'react'
import s from "./HomeHero.module.css"
import img from "../../public/3111802.jpg"
import Image from 'next/image'
function HomeHero() {
  return (
    <div className={s.container}>
        <div className={s.boxbox}>
        <div className={s.leftbox}>
           <div className={s.messagebox}>
            <span className={s.message}>
            Get Rid Of the extra clutter, and earn money while you do it!
            </span>
           </div>
           </div>
           <div className={s.rightbox}>
            <div className={s.buttonbox}>
                <button className={s.button}>
                    Get Started!
                </button>
            </div>
           </div>
          </div>
        <div className={s.banner}>
          
            
            <Image src={img} alt="banner image" priority className={s.image}/>
        </div>
    </div>
  )
}

export default HomeHero