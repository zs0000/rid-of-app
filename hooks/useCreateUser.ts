import { useMutation, useQueryClient } from "react-query"
import { supabase } from "../utils/supabaseClient";

interface User {

  email: string;
  username?: string;
  password: string;
}

const createUser = async (user: User) => {
  // Check if username exists
  if(user.username){
    const { data: userWithUsername } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', user.username)
    .single()

  if(userWithUsername) {
    throw new Error('User with username exists')
  }
  }

  const { data, error: signUpError } = await supabase.auth.signUp({
    email: user.email,
    password: user.password
  })

  if(signUpError) {
    throw signUpError
  }

  return data
}

export default function useCreateUser(user: User) {
  return useMutation(() => createUser(user), {
    onSuccess: async(data) => {
      const { data: insertData, error: insertError } = await supabase
        .from('profiles')
        .insert({

          username: user.username,
          id: data.user?.id
        })

      if(insertError) {
        throw insertError
      }

      return insertData
    }
  })
}