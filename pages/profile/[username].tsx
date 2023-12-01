import { useRouter } from "next/router";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import useUser from "../../hooks/useUser"
import useUserListings from "../../hooks/useUsersListings";
import s from "./Profile.module.css"

function Profile() {

    const router = useRouter()
    const {username}:any = router.query
    const user = useUser();
    const listingItems = useUserListings({username});
  return (
    <div className={s.container}>
        <ProfileCard username={username} />
    </div>
  )
}

export default Profile