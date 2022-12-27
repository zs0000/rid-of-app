import Image from "next/image"
import Link from "next/link"
import s from "./AvailableItemCard.module.css"

function AvailableItemCard({availableItem}) {
   
  return (
    <Link href={`/listing/${availableItem.id}`} className={s.container}>
       <div className={s.imagebox}>
       <Image src={availableItem.listing_image_url} width={500} height={500} alt="listing image" className={s.image} />
       </div>
       <div className={s.titlebox}>
            <span className={s.title}>
                {availableItem.listing_title}
            </span>
       </div>
       <div className={s.pricebox}>
            <span className={s.price}>
                ${availableItem.listing_price}
            </span>
       </div>
    </Link>
  )
}

export default AvailableItemCard