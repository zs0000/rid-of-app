import Image from "next/image"
import s from "./ProfileItemCard.module.css"

function ProfileItemCard({item}) {
  return (
    <div className={s.card}>
        <div className={s.imagebox}>
        <Image src={item.image} className={s.image} alt="item image" />
        </div>
        
    </div>
  )
}

export default ProfileItemCard