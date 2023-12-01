import s from "./AvailablePage.module.css"
import ProtectedWrapper from '../../components/ProtectedWrapper/ProtectedWrapper'
import usePaginatedListings from "../../hooks/usePaginatedListings"
import PaginatedListings from "../../components/PaginatedListings/PaginatedListings";
import { useRouter } from "next/router";

function AvailablePage() {


 const router = useRouter()
  const {pageNumber}:any = router.query
  return (
    <ProtectedWrapper>
        <div className={s.container}>
            <PaginatedListings pageNumber={pageNumber}/>
        </div>
    </ProtectedWrapper>
  )
}

export default AvailablePage