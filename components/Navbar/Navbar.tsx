import s from "./Navbar.module.css"
import Link from "next/link"
import useUser from "../../hooks/useUser"
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter()
  const{isLoading, data} = useUser();
  return (
    <header className={s.container}>
      <div className={s.items}>
      <div className={s.titlebox}>
        <h1 className={s.title} onClick={() => router.push("/") }>
          RidOf
        </h1>
      </div>
      <div className={s.searchcontainer}>
        <input
        type="text"
        className={s.search}
        />
        
      </div>
        <div className={s.links}>
           {data  ?
           <>
           <span className={s.link}>Hello, {data.username}!</span>
           <Link className={s.link} href="/dashboard">
            Dashboard
           </Link>
            <button className={s.link}>
              Sign Out
            </button>
           </>
            :
            <>
            <Link href="/login" className={s.link}>
            Login
        </Link>
        <Link href="/register" className={s.link}>
            Register
        </Link>
            </>
            
          }
        </div>
      </div>
      
    </header>
  )
}
