import s from "./ProfileCard.module.css"
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/micah';
import Image from "next/image";
import ProfileItems from "../ProfileItems/ProfileItems";
import g from "../../public/bottle.jpg"
import useUserListings from "../../hooks/useUsersListings";
import useUser from "../../hooks/useUser";

interface User{
    username:string;
}

function ProfileCard({username}:{username:User}) {

    
    let sellingItems = [
        {
            title:"lorem ispsum dole eta it",
            price:350.00,
            image:g
        },
        {
            title:"lorem is ds eta it",
            price:50.00,
            image:g
        },
        {
            title:"lor ds emdasd a it",
            price:30.00,
            image:g
        },
        {
            title:"asd w wdsd w it",
            price:70.00,
            image:g
        },
        {
            title:"lom ispsum dole eta it",
            price:150.00,
            image:g
        }
    ]
    const {data} = useUser()

    
    const handleClickMessage  = async(e) =>{
        e.preventDefault()
        try {
                   
            

        } catch (error) {
            throw new Error
        }
    }



  return (
    <div className={s.container}>
        <div className={s.form}>
            <div className={s.topbox}>
            <div className={s.imagebox}>
            <Image src={`https://avatars.dicebear.com/api/micah/:${username}.svg`} width={200} height={200} className={s.svg}  alt="potato"/>
            </div>
            <div className={s.textbox}>
            <span className="font-bold text-2xl md:text-3xl">
                {"@"+username}
            </span>
            </div>
            </div>
            <div className={s.selectionbar}>
                <div className={s.soldbox}>
                    <button className={s.button}>
                        Selling
                    </button>
                </div>
                <div className={s.soldbox}>
                    <button className={s.button} onClick={()=>sortUsernames()}>
                        Reviews
                    </button>
                </div>
            </div>
            <div className={s.itemsbox}>
                <ProfileItems
                username={username}
                />
            </div>
        </div>
    </div>
  )
}

export default ProfileCard