import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { supabase } from '../utils/supabaseClient'

const messagePreview = async({id}:{id:string}) => {
    const listingTitle = await supabase
    .from("listings")
    .select("listing_title")
    .eq("id",id)
    .single()

    const recentMessage = await supabase
    .from("conversation_messages")
    .select()
    .eq("")

    if(error){
        console.log(error)
    }

    return data;
}

export default function useMessagePreview({id}:{id:string}){
    return useQuery(`${id}-message-preview`, ()=> messagePreview({id}))
}