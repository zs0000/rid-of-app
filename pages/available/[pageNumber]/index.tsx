import { useRouter } from "next/router"
import s from "./PaginatedListings.module.css"



function PaginatedListings() {

  const router = useRouter()

  const {pageNumber} = router.query
  return (
    <div className={s.container}>
    {pageNumber ?
    
    (<>
    <PaginatedListings pageNumber={Number(pageNumber)}/>
    </>)
    :
    <></>
    }
    </div>
  )
}

export default PaginatedListings