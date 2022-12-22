import { useRouter } from 'next/router'
import useUser from '../../hooks/useUser'
import s from "./ProtectedWrapper.module.css"

function ProtectedWrapper({children}:{children:React.ReactNode}) {
    const router = useRouter();
    const {isLoading, isError} =useUser();

    if(isLoading){
        return(
        <div className=''>
            loading
        </div>
        )
    }

    if(isError){
      router.push('/login')
        return(
          <div>
            loading..
          </div>
        )
    }

  return (
    <>
      {children}
  </>

  )
}

export default ProtectedWrapper