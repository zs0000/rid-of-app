import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { supabase } from '../utils/supabaseClient'

const conversationMessages = async({conversationId}:{conversationId:number}) => {
    console.log(conversationId)
    const {data, error} = await supabase
    .from("conversation_messages")
    .select("*")
    .eq("id",conversationId)
    console.log(data)
    
    if(error){
        console.log(error)
    }

    return data;
}

export default function useConversationMessages({conversationId}:{conversationId:number}){
    return useQuery(`${conversationId}-conversation-messages`, ()=>conversationMessages({conversationId}))
}