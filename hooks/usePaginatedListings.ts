import { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { supabase } from '../utils/supabaseClient'

interface pageinatedListings{
    listings:Array<Object>;
    count: number;
    pageNumber:number;
    
}

const paginatedListings = async({pageNumber}:{pageNumber:number})=>{
    let listings = [];
    let result = await supabase.from("listings").select('*',{count:'exact', head:true})
    console.log(result)
    let numb = pageNumber * 9
    let count = await result.count
    if(count && count >= numb && pageNumber > 1){
        let {data, error} = await supabase.from("listings").select("*").range(numb, numb+8);
        if(data){
            listings.push(...data)
        }
    } else{
        let {data,error} = await supabase.from("listings").select("id,listing_title, listing_price, listing_image_url").limit(numb)
        if(data){
            listings.push(...data)
        }
    }

    console.log(listings)

    return listings
}

export default function usePaginatedListings({pageNumber}:{pageNumber:any}){
    return useQuery(`${pageNumber}-page-listings`, ()=> paginatedListings({pageNumber})) 
}