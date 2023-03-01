import { useMutation, useQueryClient } from "react-query"
import { supabase } from "../utils/supabaseClient";

interface Message {
    conversation_id: number
    author:string
    message_text:string
  }

const sendMessage = async(message: Message) =>{
    
    const {data,error} = await supabase
    .from("conversation_messages")
    .insert(message)

    

    if(error){
        console.log(error)
    } else{
        
    }
    return data
}

export default function useSendMessage(message: Message){
    return useMutation(()=> sendMessage(message))
}

{/*
, {
        onSuccess: async(data) => {
            const {data: insertData, error: insertError} = await supabase
            .from("messages")
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