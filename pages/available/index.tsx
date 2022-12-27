import s from "./AvailablePage.module.css"
import ProtectedWrapper from '../../components/ProtectedWrapper/ProtectedWrapper'
import usePaginatedListings from "../../hooks/usePaginatedListings"
import PaginatedListings from "../../components/PaginatedListings/PaginatedListings";

function AvailablePage() {


 let pageNumber=1;
  return (
    <ProtectedWrapper>
        <div className={s.container}>
            <PaginatedListings pageNumber={pageNumber}/>
        </div>
    </ProtectedWrapper>
  )
}

export default AvailablePage