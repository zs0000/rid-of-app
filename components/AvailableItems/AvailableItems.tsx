import AvailableItemCard from "../AvailableItemCard/AvailableItemCard"
import s from "./AvailableItems.module.css"

function AvailableItems({listingItems}) {
    console.log(listingItems)
  return (
    <div className={s.container}>
       
        {listingItems ? 
        listingItems.data?.map((availableItem)=>(
            <AvailableItemCard key={availableItem.listing_image_url} availableItem={availableItem} />
        ))
        :
        <>

        </>    
    }
    </div>
  )
}

export default AvailableItems