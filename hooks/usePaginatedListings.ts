import { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { supabase } from '../utils/supabaseClient'

interface PaginatedListings{
    listings:Array<Object>;
    count: number;
    pageNumber:number;
    maxPageNumber:number

}

const paginatedListings = async({pageNumber}:{pageNumber:number}): Promise<PaginatedListings> => {
    const pageSize = 9;
    const { count } = await supabase.from('listings').select('*', { count: 'exact' });
   
    const offset = (pageNumber - 1) * pageSize;
    const upperRange = offset + pageSize - 1
    const maxPageNumber = Math.ceil(count / pageSize);
    console.log(" hi "  + upperRange + "lol" + offset + "good" +  pageNumber)
    if( upperRange > count){
        const { data, error } = await supabase
        .from('listings')
        .select('id, listing_title, listing_price, listing_image_url, listing_status')
        .range(offset, count -1);
      if (error) {
        console.error(error);
        throw error;
      } 
      return {
        listings: data || [],
        count: count || 0,
        pageNumber,
        maxPageNumber
      };
    } else{
        const { data, error } = await supabase
        .from('listings')
        .select('id, listing_title, listing_price, listing_image_url, listing_status')
        .range(offset, offset + pageSize - 1);
      if (error) {
        console.error(error);
        throw error;
      }
      return {
        listings: data || [],
        count: count || 0,
        pageNumber,
        maxPageNumber

      };
    }
   
  };
export default function usePaginatedListings({pageNumber}:{pageNumber:any}){
    return useQuery(`${pageNumber}-page-listings`, ()=> paginatedListings({pageNumber})) 
}