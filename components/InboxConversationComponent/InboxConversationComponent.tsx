import s from "./InboxConversationComponent.module.css"
import {useEffect, useState} from 'react'
import ConversationInput from "../ConversationInput/ConversationInput"


function InboxConversationComponent({conversation, user}) {



  return (
    <div className={s.container}>
        <div className={s.messagescontainer}>
           
            {conversation[0] ? conversation.map((message)=>(
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
              <ConversationInput user={user} conversationId={conversation} />
            </div> : <></>}
    </div>
  )
}

export default InboxConversationComponent