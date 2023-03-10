import { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { supabase } from '../utils/supabaseClient'

//fetch conversations
//fetch listing data and recent message
//map to each preview card.


const getConversation = async({user}: {user:string}) =>{
    const { data, error } = await supabase
  .from('listing_conversations')
  .select('*')
  .or(`sender.in.(${user}),receiver.in.(${user})`);

  console.log(error)


   
    return data
}

export default function useConversation({user}:{user:string} ){
    return useQuery(`${user}-test`,()=>getConversation({user}));
}