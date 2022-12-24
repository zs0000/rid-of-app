import useUserListings from "../../hooks/useUsersListings"
import ProfileItemCard from "../ProfileItemCard/ProfileItemCard"
import s from "./ProfileItems.module.css"

function ProfileItems({username}) {
 
  const {data, error} = useUserListings({username})
  console.log(data)
 
  return (
    <div className={s.container}>
        {data? data.map((item)=>(
          <ProfileItemCard key={item} item={item}/>
        )) : <></>}
    </div>
  )
}

export default ProfileItems