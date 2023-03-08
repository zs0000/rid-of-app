import React, { useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage'
import s from "./ConversationInput.module.css"

function ConversationInput({user,  conversationId}:{user:string,conversationId:number}) {

    const [messageText, setMessageText] = useState("")

    let messageData={
        conversation_id:conversationId,
        author:user,
        message_text:messageText
    }
    const sendMessage = useSendMessage(messageData)

    console.log(messageData)
  return (
    <div className={s.container}>
        
        <textarea
        className={s.textarea}
        id="message_text"
        value={messageText}
        onChange={(e)=>setMessageText(e.target.value)}
        
        />

        <div className={s.buttoncontainer}>
            <button className={s.button} onClick={()=>{
                sendMessage.mutate()
                setMessageText("")
             

                
            }}>
                Send
            </button>
        </div>
    </div>
  )
}

export default ConversationInput