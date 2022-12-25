import s from "./ListingPage.module.css"
import ListingPageCard from '../../components/ListingPageCard/ListingPageCard'
import useListingDetails from "../../hooks/useListingDetails"
import { useRouter } from "next/router"
import useUser from "../../hooks/useUser"



function ListingPage() {
    const router = useRouter()
    const {id} = router.query

    const{data,error} = useUser()
   

  return (
    <div className={s.container}>
        <ListingPageCard id={id}/>
        
    </div>
  )
}

export default ListingPage