import s from "./LoginPage.module.css"
import { useReducer, useState } from "react"
import useLogin from "../../hooks/useLogin";
import { useRouter } from "next/router";
interface Login {
    email:string;
    password:string;
}
function Login() {
    const router = useRouter()
    const [userLogin, setUserLogin] = useReducer(
        (state:Login, partialState:Partial<Login>) =>({
            ...state,
            ...partialState
        }),
        {email:"", password:""}
    )

   
    const loginMutation = useLogin(userLogin)
   

    if(loginMutation.isSuccess) {
      router.push('/dashboard')
    }
    
    return (
      <div className="min-h-screen grid place-items-center text-xl">
        <div className="w-2/3 lg:w-1/3 shadow-lg flex flex-col items-center">
          <div className="mt-8 w-full lg:w-auto px-4">
            <p>Email</p>
            <input 
              type="text" 
           
              onChange={(e)=> {
                setUserLogin({
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
                setUserLogin({
                    password:e.target.value
                })
              }}
            />
          </div>
          <div className="mb-8">
            <button onClick={() => loginMutation.mutate()} className="bg-blue-500 text-white px-8 py-2 rounded">{loginMutation.isLoading? 
        <span>
          <>....</>
        </span> :
        <span>Login</span>
      }</button>
          </div>
        </div>
      </div>
    )
}

export default Login