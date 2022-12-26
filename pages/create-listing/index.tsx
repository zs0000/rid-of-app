import ProtectedWrapper from "../../components/ProtectedWrapper/ProtectedWrapper"
import s from "./CreateListing.module.css"

import useUser from "../../hooks/useUser"
import CreateListingForm from "../../components/CreateListingForm/CreateListingForm"


function CreateListing() {

    const {data, isError} =useUser();
    
    
   

  return ( 
    <ProtectedWrapper>
        <div className={s.container}>
            <CreateListingForm data={data}/>
        </div>
    </ProtectedWrapper>
  )
}

export default CreateListing