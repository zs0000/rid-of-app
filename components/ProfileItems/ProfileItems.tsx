import useUserListings from "../../hooks/useUsersListings"
import ProfileItemCard from "../ProfileItemCard/ProfileItemCard"
import s from "./ProfileItems.module.css"

function ProfileItems({username}) {
 let loadingE =[{e:"ef"},{e:"ea"},{e:"ew"},{e:"er"},{e:"ett"},{e:"eh"}]
  const {data, error} = useUserListings({username})
  console.log(data)
 
  return (
    <div className={s.container}>
        {data != null? data.map((item)=>(
          <ProfileItemCard key={item} item={item}/>
        )) : 
          <>
          {loadingE.map((ele)=>(
            <div className={s.loading} key={ele.e}>
            </div>
          ))}
          </>
        
        }
    </div>
  )
}

export default ProfileItems