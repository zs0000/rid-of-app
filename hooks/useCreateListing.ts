import { useMutation, useQueryClient } from "react-query"
import { supabase } from "../utils/supabaseClient";

interface Listing {
    user_id: string;
    username:string;
    listing_conditon?:string;
    listing_category?:string;
    listing_local_pickup:boolean;
    listing_title?:string;
    listing_description?:string;
    listing_price?:string;
    listing_image_url?:any;
    listing_created_on?:Date;
  }

const createListing = async(listing: Listing) =>{
    
    const {data,error} = await supabase
    .from("listings")
    .insert(listing)

    

    if(error){
        console.log(error)
    } else{
        
    }
    return data
}

export default function useCreateListing(listing: Listing){
    return useMutation(()=> createListing(listing))
}

{/*
, {
        onSuccess: async(data) => {
            const {data: insertData, error: insertError} = await supabase
            .from("listings")
            .insert({
                id: listing.id,
                username:listing.username,
                listing_title:listing.listing_title,
                listing_description:listing.listing_description,
                listing_price:listing.listing_price,
                listing_image_url:listing.listing_image_url,
                listing_created_on:listing.listing_created_on
            })
            if(insertError) {
                throw insertError
              }
              return insertData
        }
    }
*/}