import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { supabase } from '../utils/supabaseClient'

const conversationDetails = async({conversationId,user}:{conversationId:number,user:string}) => {
    console.log(conversationId)
    const {data, error} = await supabase
    .from("listing_conversations")
    .select()
    .eq("id",conversationId)
    .single()
    let messages =[]
    if(data ==  null){
  
        return {a:1,d:2,authenticated:false, messages}
    } 
    const listingDetails = await supabase
    .from("listings")
    .select()
    .eq("id", data.listing_id)
    .single()

    let x =false
    if(data.sender == user || data.receiver ==user){
        x=true        
    }
   
    if(x=true){
        messages = await supabase
        .from("conversation_messages")
        .select("*")
        .eq("conversation_id", conversationId)
        console.log(messages)
    }
    
    let retObj = {
        conversation_data: data,
        listing_data: listingDetails,
        messages,
        authenticated: x
    }

    if(error){
        console.log(error)
        
        
    }

    return retObj;
}

export default function useConversationDetails({conversationId, user}:{conversationId:number, user:string}){
    return useQuery(`${conversationId}-conversation-details`, ()=>conversationDetails({conversationId,user}))
}