import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { supabase } from '../utils/supabaseClient'

const listingDetails = async({id}:{id:string}) => {
    const {data, error} = await supabase
    .from("listings")
    .select()
    .eq("id",id)
    .single()

    if(error){
        console.log(error)
    }

    return data;
}

export default function useListingDetails({id}:{id:string}){
    return useQuery(`${id}-listing-details`, ()=>listingDetails({id}))
}