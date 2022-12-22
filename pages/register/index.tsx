import s from "./RegisterPage.module.css"
import { useReducer, useState } from "react"

import { useRouter } from "next/router";
import useCreateUser from "../../hooks/useCreateUser";
interface Register {
    email:string;
    password:string;
}
function Register() {
    const router = useRouter()
    const [userRegister, setUserRegister] = useReducer(
        (state:Register, partialState:Partial<Register>):Register =>({
            ...state,
            ...partialState
        }),
        {email:"", password:""}
    )

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const createUserMutation = useCreateUser({
        email,
        password
      })
    
      if(createUserMutation.isSuccess) {
        router.push("/")
      }
   
    
    return (
      <div className="min-h-screen grid place-items-center text-xl">
        <div className="w-2/3 lg:w-1/3 shadow-lg flex flex-col items-center">
          <div className="mt-8 w-full lg:w-auto px-4">
            <p>Email</p>
            <input 
              type="text" 
           
              onChange={(e)=> {
                setUserRegister({
                    email:e.target.value,
                })
              }}
              className="h-8 focus:outline-none shadow-sm border p-4 rounded mt-2 w-full lg:w-auto"
            />
          </div>
          <div className="my-8 w-full lg:w-auto px-4">
            <p>Password</p>
            <input 
              className="h-8 focus:outline-none shadow-sm border p-4 rounded mt-2 w-full lg:w-auto"
              type="password"
           
              onChange={(e) => {
                setUserRegister({
                    password:e.target.value
                })
              }}
            />
          </div>
          <div className="mb-8">
            <button onClick={() => createUserMutation.mutate()} className="bg-blue-500 text-white px-8 py-2 rounded">{createUserMutation.isLoading? 
        <span>
          <>....</>
        </span> :
        <span>Register</span>
      }</button>
          </div>
        </div>
      </div>
    )
}

export default Register