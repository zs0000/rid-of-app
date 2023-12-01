import Image from "next/image"
import s from "./ListingPageCard.module.css"
import y from "../../public/bottle.jpg"
import useListingDetails from "../../hooks/useListingDetails"
import Link from "next/link";
import useListingInquire from "../../hooks/useListingInquire";
import useUser from "../../hooks/useUser";
import { useRouter } from "next/router";


function ListingPageCard({id, user} : {id:any, user:any}) {
    console.log(user)
    
    const {data,error} = useListingDetails({id});
                        
    let conversationObj= {
        listing_id:data?.id,
        sender: user?.id,
        receiver: data?.user_id,
        
    }
    const router = useRouter()

    const handleInquireSuccess = (data:any) => {
      if (data.redirect) {
        router.push(`/conversation/${data.data[0].id}`);
      }
    }
  
    const inquireMutation = useListingInquire(conversationObj, { onSuccess: handleInquireSuccess })
    
    
    
  return (
    <>
    {data ? <div className={s.container}>
        <div className={s.titlebar}>
            <span className={s.category}>
                        {data.listing_category}
                    </span>
        </div>
        <div className={s.topbox}>
        <div className={s.imagebox}>
            <Image  src={data.listing_image_url} className={s.image} width={1000} height={1000} priority alt="listing image" />
        </div>
        <div className={s.interactbox}>
        <div className={s.listingconditionbox}>
                    
                </div>
                <div className={s.listinginfobox}>
                    
                <div className={s.listingtitlebox}>
               
                <span className={s.listingtitle}>
                <span className={s.listingcondition}>
                        {data.listing_condition}
                    </span>
                    {data.listing_title}
                </span>
                </div>
                
                </div>
                <div className={s.pricebox}>
                <span className={s.price}>${data.listing_price}</span>
            </div>
                <div className={s.buttonsbox}>
                    <button onClick={()=> 

    
                        inquireMutation.mutate()} className={s.inquire}>
                        Inquire
                    </button>
                    <Link href={`/profile/${data.username}`} className={s.buynow}>
                        {data.username + "'s profile"}
                    </Link>
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