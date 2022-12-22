import s from "./ProfileCard.module.css"
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/micah';
import Image from "next/image";
import ProfileItems from "../ProfileItems/ProfileItems";
import g from "../../public/bottle.jpg"

interface User{
    username:string;
}

function ProfileCard({data}:{data:User}) {

    let items = [
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
    

    let seed=data.username

let svg = createAvatar(style, {
  seed: 'custom-seed',
  // ... and other options
});
  return (
    <div className={s.container}>
        <div className={s.form}>
            <div className={s.topbox}>
            <div className={s.imagebox}>
            <Image src={`https://avatars.dicebear.com/api/micah/:${seed}.svg`} width={200} height={200} className={s.svg}  alt="potato"/>
            </div>
            <div className={s.textbox}>
            <span className="font-bold text-2xl md:text-3xl">
                @{data.username}
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
                    <button className={s.button}>
                        Buying
                    </button>
                </div>
            </div>
            <div className={s.itemsbox}>
                <ProfileItems
                items={items}
                />
            </div>
        </div>
    </div>
  )
}

export default ProfileCard