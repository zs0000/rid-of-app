import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { supabase } from '../utils/supabaseClient'

const getUser = async () => {
  const user = await supabase.auth.getUser()
  if(user){
    const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', user.data.user?.id)
    .single()

  if(error) {
    throw new Error(error.message)
  }

  if(!data) {
    throw new Error("User not found")
  }

  return data
  }else{
    return false;
  }
}

export default function useUser() {



  return useQuery('user', () => getUser())
}