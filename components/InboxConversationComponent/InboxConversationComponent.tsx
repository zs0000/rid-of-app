import s from "./InboxConversationComponent.module.css"
import {useEffect, useState, useRef} from 'react'
import ConversationInput from "../ConversationInput/ConversationInput"
import { useQuery } from "react-query"
import { supabase } from "../../utils/supabaseClient"
import useConversationDetails from "../../hooks/useConversationDetails"
import dateFormat, { masks } from "dateformat";
import useSendMessage from "../../hooks/useSendMessage"
import Link from "next/link"
import useAcceptOffer from "../../hooks/useAcceptOffer"
const now = new Date();

function InboxConversationComponent({conversationId, conversation, user}) {

  const [myRecentMessage, setMyRecentMessage] = useState([])
  const [theirRecentMessage, setTheirMessage] = useState([])
  const [offer, setOffer] = useState<Number>(0)
  const [itemTitle, setItemTitle] = useState("")
  const [messageText, setMessageText] = useState("")

  let messageData={
      conversation_id:conversationId,
      author:user,
      message_text: `I would like to purchase your ${itemTitle} for $${offer}.`
  }
  const sendMessage = useSendMessage(messageData)
 
  const messagesRef = useRef<HTMLDivElement>(null);
const {data, isLoading, error} = useConversationDetails({conversationId, user}) 
console.log(data)

const acceptOffer = useAcceptOffer({listingData:data?.listing_data.data, conversationData:data?.conversation_data})

useEffect(() => {
  if (messagesRef.current) {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }
  setItemTitle(data?.listing_data.data.listing_title)
}, [conversation, conversationId, data]);

  return (
    <div className={s.container}>
      <div className={s.infobar}>
      <div className={s.left}>
      {data ? <span className={s.title}>
        {data?.listing_data.data.listing_title}
      </span>:<>loading..</>}
      </div>
      <div className={s.right}>
        <div className={s.controls}>
        <div className={s.acceptcontainer}>
          {data?.conversation_data.receiver == user ? 
          <button disabled={data?.listing_data.data.listing_status == "closed" ? true : false} onClick={()=> acceptOffer.mutate()} className={s.accept}>
            {data?.listing_data.data.listing_status == "closed" || acceptOffer.isLoading ? "Sold" : "Accept Offer"}
          </button> : <button onClick={()=>sendMessage.mutate()} className={s.accept}>
            {data?.listing_data.data.listing_status == "closed" && data?.listing_data.data.listing_purchased_by == user || data?.listing_data.data.listing_purchased_by == `pending-${user}` ? "Review" : "Send Offer"}
          </button>}
          </div>
          <div className={s.profilecontainer}>
            <Link href={data?.users[0].id == user ? `/profile/${data?.users[1].username}`:`/profile/${data?.users[0].username}`}>
            View Profile
            </Link>
          </div>
        </div>
        <div className={s.offercontainer}>
        {data?.conversation_data.receiver == user ? <span className={s.offer}>
            $$$
          </span> :
          <div className="flex flex-row text-green-600">
            <span>$</span>
            <input className={s.offerinput} onChange={(e)=>setOffer(Number(e.target.value))} placeholder={data?.listing_data.data.listing_price} type="number" id="offer" name="offer" ></input>
            </div>
          
          }
        </div>
      </div>
      </div>
      
        <div ref={messagesRef} className={s.messagescontainer}>
           
            {conversation ? conversation.map((message)=>(
                <div key={message.id} className={message.author == user ? s.mymessagecontainer : s.othermessagecontainer}>
                  <div className={message.author == user ? s.mymessage : s.othermessage}>
                    {message.message_text}
                  </div>
                 
                 <div className={s.timestamp}>
                  {dateFormat(message.sent_at,"default")}
                 </div>
                </div>
                
              ))
              :
              <>
            
              </>  
            }
       
              
            
          </div>
          {conversation[0] ? <div className={s.inputcontainer}>
              <ConversationInput user={user} conversationId={conversation[0].conversation_id} />
            </div> : <></>}
    </div>
  )
}

export default InboxConversationComponent