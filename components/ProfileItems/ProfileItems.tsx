import ProfileItemCard from "../ProfileItemCard/ProfileItemCard"
import s from "./ProfileItems.module.css"

function ProfileItems({items}) {
  return (
    <div className={s.container}>
        {items.map((item)=>(
          <ProfileItemCard key={item} item={item}/>
        ))}
    </div>
  )
}

export default ProfileItems