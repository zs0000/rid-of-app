import { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { supabase } from '../utils/supabaseClient'


const userMessages = async({user}: {user:string}) =>{
    console.log("hi" + user)
    const{data, error} = await supabase
    .from("listing_conversations")
    .select("*")
    .eq("receiver", user)
    console.log(data)

    if(error){
        console.log(error)
    }
    return data
}

export default function useUserMessages({user}:{user:string} ){
    return useQuery(`${user}-messages`,()=>userMessages({user}));
}