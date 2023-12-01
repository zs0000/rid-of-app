import AvailableItemCard from "../AvailableItemCard/AvailableItemCard"
import s from "./AvailableItems.module.css"
import {useEffect} from 'react'
function AvailableItems({listingItems}:{listingItems:any}) {
    console.log(listingItems)
  
    
    
  return (
    <div className={s.container}>
       
        {listingItems ? 
        listingItems.data?.listings.map((availableItem)=>{
          console.log(availableItem)
          if(availableItem.listing_status == "closed"){
            return <></>
          } else{
            return <AvailableItemCard key={availableItem.listing_image_url} availableItem={availableItem} />
          }
        })
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