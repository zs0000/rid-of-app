import Image from "next/image"
import s from "./ListingPageCard.module.css"
import y from "../../public/bottle.jpg"
import useListingDetails from "../../hooks/useListingDetails"

function ListingPageCard({id} : {id:string}) {

    const {data,error} = useListingDetails({id});
    
  return (
    <>
    {data ? <div className={s.container}>
        <div className={s.titlebar}>
        <span className={s.title}>
           
        </span>
        </div>
        <div className={s.topbox}>
        <div className={s.imagebox}>
            <Image src={data.listing_image_url} className={s.image} width={1000} height={1000} alt="listing image" />
        </div>
        <div className={s.interactbox}>
         
                <div className={s.listinginfobox}>
                <div className={s.listingtitlebox}>
               
                <span className={s.listingtitle}>
                    {data.listing_title}
                </span>
                </div>
                
                </div>
                <div className={s.pricebox}>
                <span className={s.price}>${data.listing_price}</span>
            </div>
                <div className={s.buttonsbox}>
                    <button className={s.inquire}>
                        Inquire
                    </button>
                    <button className={s.buynow}>
                        Buy Now
                    </button>
                </div>
          
                
            
        </div>
        </div>
        <div className={s.descriptionbox}>
        <div className={s.sellerbox}>
                <div className={s.sellerimagebox}>
                <Image src={`https://avatars.dicebear.com/api/micah/:${data.username}.svg`} width={200} height={200} className={s.svg}  alt="potato"/>
                </div>
                <div className={s.sellerusernamebox}>
                    <span className={s.sellerusername}>
                        @{data.username}
                    </span>
                </div>
            </div>
            <span className={s.description}>
                {data.listing_description}
            </span>
        </div>
    </div>
    :
    <>loading...</>    
}
    </>
  )
}

export default ListingPageCard