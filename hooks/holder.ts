import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { supabase } from '../utils/supabaseClient'

const conversationDetails = async({id}:{id:string}) => {
    const {data, error} = await supabase
    .from("listing_conversations")
    .select()
    .eq("id",id)
    .single()
    
    if(error){
        console.log(error)
    }

    return data;
}

export default function useConversationDetails({id}:{id:string}){
    return useQuery(`${id}-conversation-details`, ()=>conversationDetails({id}))
}