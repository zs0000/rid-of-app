import Image from "next/image"
import s from "./ProfileItemCard.module.css"

function ProfileItemCard({item}) {
  return (
    <div className={s.card}>
        <div className={s.imagebox}>
        <Image src={item.listing_image_url} width={500} height={500} className={s.image} alt="item image" />
        </div>
        
    </div>
  )
}

export default ProfileItemCard