import { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { supabase } from '../utils/supabaseClient'


const userListings = async({username}: {username:string}) =>{
    console.log(username)
    const{data, error} = await supabase
    .from("listings")
    .select()
    .eq("username", username)
    console.log(data)

    if(error){
        console.log(error)
    }
    return data
}

export default function useUserListings({username}:{username:string} ){
    return useQuery(`${username}-listings`,()=>userListings({username}));
}