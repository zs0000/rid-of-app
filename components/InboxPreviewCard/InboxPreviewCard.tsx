import Image from "next/image"
import { useRouter } from "next/router"
import useMessagePreview from "../../hooks/useMessagePreview"
import s from "./InboxPreviewCard.module.css"

function InboxPreviewCard({conversationId,listingId,sender}:any) {
  
    const {data, isLoading,error}:any = useMessagePreview({conversationId, listingId, sender})
    const router = useRouter()
    function handleClickConversation(e:Event){
        router.push(`/conversation/${conversationId}`)
    }

    if(isLoading){
      return(
        <div className={s.loadingcontainer}>
            <div className={s.loadingauthorcard}>
          
        </div>
        </div>
      )
    }

    return (
    <div className={data?.recentMessageFromUser ? s.container : s.hide} >
        <div className={s.authorcard}>
          <div className={s.authorimage}>
          <Image src={`https://avatars.dicebear.com/api/micah/:${sender}.svg`} width={200} height={200} className={s.svg}  alt="potato"/>
          </div>
        </div>
        <div className={s.messageinfo}>
        <div className={s.listingtitlecontainer}>
          <span className={s.listingtitle}>
            {data ? data.listingTitle : ""}
          </span>
        </div>
        <div className={s.listingmessagecontainer}>
          {data ? data.recentMessageFromUser : ""}
        </div>
        
        </div>
    </div>
  )
}

export default InboxPreviewCard