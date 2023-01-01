import { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { supabase } from '../utils/supabaseClient'

interface ListingInquireData {
 listing_id: string;
 conversation_starter: string;
 conversation_receiver: string;
 starter_unread: boolean;
 receiver_unread:boolean;
}

const listingInquire = async({input}:{input:ListingInquireData}) =>{
    const {data, error} = await supabase
    .from("listing_conversations")
    .select()
    .eq("listing_id", input.listing_id)
    .eq("conversation_starter", input.conversation_starter)
    .single()

    if(data){
        console.log("exists")
    } else{
        console.log("doesnt exist")
    }

    if(error){
        console.log("noooooooooo  exists")
        console.log(error)
    }

    return data
}


export default function useListingInquire({input}:{input:ListingInquireData}){
    return useMutation(`${input.conversation_starter}-${input.listing_id}-convo`, () => listingInquire({input}))
}