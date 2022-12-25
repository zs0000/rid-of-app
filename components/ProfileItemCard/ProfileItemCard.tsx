import Image from "next/image"
import Link from "next/link"
import s from "./ProfileItemCard.module.css"

function ProfileItemCard({item}) {
  return (
    <Link href={`/listing/${item.id}`} className={s.card}>
        <div className={s.imagebox}>
        <Image src={item.listing_image_url} width={500} height={500} className={s.image} alt="item image" />
        </div>
        
    </Link>
  )
}

export default ProfileItemCard