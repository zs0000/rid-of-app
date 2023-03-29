
import { useMutation, useQuery } from 'react-query'
import { supabase } from '../utils/supabaseClient'

interface ListingData {
    conversationData: {
    sender: string;
    },
    listingData: {
        
            id: string;
            username: string;
            user_id: string;
            listing_title: string;
            listing_description: string;
            listing_price: string;
            listing_image_url: string;
            listing_created_on: string;
            listing_condition: string;
            listing_category: string;
            listing_local_pickup: string;
            listing_status: string;
            listing_purchased_by: string;
        
    
    }
}


const acceptOffer = async({listingData, conversationData}:{listingData:ListingData, conversationData:ListingData} ) =>{

    console.log(listingData)
    console.log(conversationData)
    const {data,error} = await supabase
    .from("listings")
    .update({
        username: listingData.username,
        user_id: listingData.user_id,
        listing_title: listingData.listing_title,
        listing_description: listingData.listing_description,
        listing_price: listingData.listing_price,
        listing_image_url: listingData.listing_image_url,
        listing_created_on: listingData.listing_created_on,
        listing_condition: listingData.listing_condition,
        listing_category: listingData.listing_category,
        listing_local_pickup: listingData.listing_local_pickup,
        listing_status: 'closed',
        listing_purchased_by: `pending-${conversationData.sender}`})
    .eq('id', listingData.id)
        console.log(data)
        if (error){
            console.log(error)
            return false
        }
   
    return true
}

export default function useAcceptOffer({listingData, conversationData}:{listingData:ListingData, conversationData:ListingData} ){
    return useMutation(()=> acceptOffer({listingData, conversationData}))
}