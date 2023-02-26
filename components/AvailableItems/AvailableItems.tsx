import AvailableItemCard from "../AvailableItemCard/AvailableItemCard"
import s from "./AvailableItems.module.css"

function AvailableItems({listingItems}) {
    console.log(listingItems)
  return (
    <div className={s.container}>
       
        {listingItems ? 
        listingItems.data?.listings.map((availableItem)=>(
            <AvailableItemCard key={availableItem.listing_image_url} availableItem={availableItem} />
        ))
        :
        <>
          <span className="w-full h-full ">
            No Items Available.
          </span>
        </>    
    }
    </div>
  )
}

export default AvailableItems