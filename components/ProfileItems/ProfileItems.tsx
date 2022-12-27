import useUserListings from "../../hooks/useUsersListings"
import ProfileItemCard from "../ProfileItemCard/ProfileItemCard"
import s from "./ProfileItems.module.css"

function ProfileItems({username}) {
 let loadingE =[{e:"ef"},{e:"ea"},{e:"ew"},{e:"er"},{e:"ett"},{e:"eh"}]
  const {data, error} = useUserListings({username})
  console.log(data)
 
  return (
    <div className={s.container}>
        {data?.length == 0 ? 
        <><div className={s.blank}>
          
        </div>
        <div className={s.blank}>
          No
        </div>
        <div className={s.blank}>
          
        </div>
        <div className={s.blank}>
          
        </div>
        <div className={s.blank}>
          listings
        </div>
        <div className={s.blank}>
          
        </div>
        <div className={s.blank}>
          
        </div>
        <div className={s.blank}>
         found. 
        </div>
        <div className={s.blank}>
          
        </div>
        </>
          :
          <></>
      }
        {data != null? data.map((item)=>(
          <ProfileItemCard key={item.id} item={item}/>
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