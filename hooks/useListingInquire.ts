import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { supabase } from '../utils/supabaseClient'

interface ListingInquireData {
  listing_id: string;
  sender: string;
  receiver: string;
  starter_unread?: boolean;
  receiver_unread?:boolean;
}

interface ListingInquireOptions {
  onSuccess?: (data: any) => void;
}

const listingInquire = async(input:ListingInquireData) =>{
  const { data }:any = await supabase.from('listing_conversations').select("*")
    .eq("listing_id", input.listing_id)
    .eq("sender", input.sender)

  if(data?.length >=1){
    return {data, redirect:true};
  } else{
    const {data, error} = await supabase
      .from("listing_conversations")
      .insert(input)

    if(error){
      console.log("failed")
    }

    return {data, redirect:false}
  }
}

export default function useListingInquire(input:ListingInquireData, options?: ListingInquireOptions){
  const router = useRouter()

  const mutation = useMutation(`${input.sender}-${input.listing_id}-convo`, () => listingInquire(input))

  useEffect(() => {
    if (mutation.isSuccess && options?.onSuccess) {
      options.onSuccess(mutation.data)
    }
  }, [mutation.isSuccess, mutation.data, options])

  return mutation
}