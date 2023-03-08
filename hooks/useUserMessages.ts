import { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { supabase } from '../utils/supabaseClient'


const userMessages = async({user}: {user:string}) =>{
    console.log("hi" + user)
    const{data, error} = await supabase
    .from("listing_conversations")
    .select("*")
    .eq("receiver", user)

    const conversationsStarted = await supabase
    .from("listing_conversations")
    .select("*")
    .eq("sender", user)

    let retObj = {
        conversationsStarted: conversationsStarted,
        conversationsReceived: data
    }
    console.log(conversationsStarted)

   
    return retObj
}

export default function useUserMessages({user}:{user:string} ){
    return useQuery(`${user}-messages`,()=>userMessages({user}));
}