import { useEffect, useState } from "react"
import useUserMessages from "../../hooks/useUserMessages"
import { supabase } from "../../utils/supabaseClient"
import InboxConversationComponent from "../InboxConversationComponent/InboxConversationComponent"
import InboxPreviewCard from "../InboxPreviewCard/InboxPreviewCard"
import s from "./InboxComponent.module.css"
function InboxComponent({user}:{user:string}) {
    const [messages, setMessages] = useState([])
    const [startedConversations, setStartedConversation] = useState([])
    const {data, error} = useUserMessages({user})
    const [conversation, setConversation] = useState([])
    useEffect(()=>{
        if(data){
            setMessages(data.conversationsReceived)
            if(data.conversationsStarted.data){
            setStartedConversation(data.conversationsStarted.data)
            console.log(startedConversations)
            }
        }
    },[data])
    console.log(user)

    async function handleConversationSelect(message){
        try {

            console.log(message)
           const {data,error} = await supabase
           .from("conversation_messages")
           .select("*")
           .eq("conversation_id",message.id)
           console.log(data)
           setConversation(data)
            
           console.log(data)
          

          

        } catch (err) {
            console.error(err.message)
        }
    }
  return (
    <div className={s.container}>
        
        <div className={s.firstcontainer}>
        <div className={s.messages}>
            <span>
                Selling
            </span>
        {messages ? messages.map((message)=>(
            <div className={s.messagecard} key={message.id} onClick={()=>handleConversationSelect(message)}>
                <InboxPreviewCard conversationId={Number(message.id)} listingId={Number(message.listing_id)} sender={message.sender} />
            </div>
        )) : <>loading...</>}
        </div>
        <div className={s.messages}>
        <span>
                Buying
            </span>
        {messages ? startedConversations.map((message)=>(
            <div className={s.messagecard} key={message.id} onClick={()=>handleConversationSelect(message)}>
                <InboxPreviewCard conversationId={Number(message.id)} listingId={Number(message.listing_id)} sender={message.sender} />
            </div>
        )) : <>loading...</>}
        </div>
        </div>
        <div className={s.conversation}>
            <InboxConversationComponent user={user} conversation={conversation}/>
        </div>
    </div>
  )
}

export default InboxComponent