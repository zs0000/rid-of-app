import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useConversationDetails from "../../hooks/useConversationDetails";
import ConversationInput from "../ConversationInput/ConversationInput";
import s from "./ConversationPageComponent.module.css"




function ConversationPageComponent({user, conversationId}:{user:string,conversationId:number}) {
  const {data,error} = useConversationDetails({conversationId, user});
  const router = useRouter()
  const [showMessages, setShowMessages] = useState(false);
  const [messages, setMessages] = useState([])
  useEffect(() => {
    if (error) {
      // Handle error
      console.log(error);
    } else if (data?.authenticated == false) {
      // User is not authorized, redirect to dashboard
      console.log(":hi")
      router.push("/dashboard");
    } else if ( data?.authenticated == true){
      setShowMessages(true)
      setMessages(data.messages.data)
    }
  }, [data, error, router]);
  
  console.log(data)
  return (
    <div className={s.container}>
      <div className={s.conversation}>
        
          <div className={s.itemcontainer}>
            <div className={s.itemsellercontainer}>
              <div className={s.itemsellerimagecontainer}>
               
              </div>
              <div className={s.itemsellerusernamecontainer}>
                <span className={s.itemsellerusername}>

                </span>
              </div>
            </div>
            <div className={s.iteminfocontainer}>
              <div className={s.itemtitlecontainer}>
                <span className={s.itemtitle}>

                </span>
              </div>
              <div className={s.itempricecontainer}>
                <span className={s.itemprice}>

                </span>
              </div>
            </div>
          </div>
          <div className={s.messagescontainer}>
           
            {showMessages ? messages.map((message)=>(
                <div key={message.id} className={message.author == user ? s.mymessagecontainer : s.othermessagecontainer}>
                  <div className={message.author == user ? s.mymessage : s.othermessage}>
                    {message.message_text}
                  </div>
                </div>
              ))
              :
              <>
              no message
              </>  
            }
       
              
            
          </div>
          <div className={s.inputcontainer}>
              <ConversationInput user={user} conversationId={conversationId} />
            </div>
      </div>
    </div>
  )
}

export default ConversationPageComponent