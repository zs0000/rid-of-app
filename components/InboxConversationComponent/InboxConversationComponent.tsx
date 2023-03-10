import s from "./InboxConversationComponent.module.css"
import {useEffect, useState} from 'react'
import ConversationInput from "../ConversationInput/ConversationInput"
import { useQuery } from "react-query"
import { supabase } from "../../utils/supabaseClient"
import useConversationDetails from "../../hooks/useConversationDetails"


function InboxConversationComponent({conversationId, conversation, user}) {

const {data, isLoading, error} = useConversationDetails({conversationId, user}) 
console.log(data)

  return (
    <div className={s.container}>
      <div className={s.infobar}>
      <div className={s.left}>
      {data ? <span>
        {data.listing_data.data.listing_title}
      </span>:<></>}
      </div>
      <div className={s.right}>
        <div className={s.controls}>
        <div className={s.acceptcontainer}>
          <span className={s.accept}>
            Accept Offer
          </span>
          </div>
          <div className={s.profilecontainer}>
            <span>
              View Profile
            </span>
          </div>
        </div>
        <div className={s.offercontainer}>
          <span className={s.offer}>
            $$$
          </span>
        </div>
      </div>
      </div>
      
        <div className={s.messagescontainer}>
           
            {conversation ? conversation.map((message)=>(
                <div key={message.id} className={message.author == user ? s.mymessagecontainer : s.othermessagecontainer}>
                  <div className={message.author == user ? s.mymessage : s.othermessage}>
                    {message.message_text}
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