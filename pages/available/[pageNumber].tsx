import s from "./AvailablePage.module.css"
import ProtectedWrapper from '../../components/ProtectedWrapper/ProtectedWrapper'
import usePaginatedListings from "../../hooks/usePaginatedListings"
import PaginatedListings from "../../components/PaginatedListings/PaginatedListings";
import { useRouter } from "next/router";

function AvailablePage() {


 const router = useRouter()
 const pageNumber = router.query.pageNumber
  return (
    <ProtectedWrapper>
        <div className={s.container}>
            <PaginatedListings pageNumber={pageNumber ? pageNumber : 1}/>
        </div>
    </ProtectedWrapper>
  )
}

export default AvailablePage