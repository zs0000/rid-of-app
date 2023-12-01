import { useEffect, useState } from "react"
import useConversation from "../../hooks/useConversation"
import useUserMessages from "../../hooks/useUserMessages"
import { supabase } from "../../utils/supabaseClient"
import InboxConversationComponent from "../InboxConversationComponent/InboxConversationComponent"
import InboxPreviewCard from "../InboxPreviewCard/InboxPreviewCard"
import Loader from "../Loader/Loader"
import s from "./InboxComponent.module.css"
function InboxComponent({user}:{user:string}) {
    const [messages, setMessages] = useState<any>([])
    const [startedConversations, setStartedConversation] = useState([])
    const {data, isLoading, error}:any = useUserMessages({user})
    const [conversation, setConversation] = useState([])
    const [conversationId, setConversationId] = useState<Number>(0)
    const [conversationSelected, setConversationSelected] = useState<Boolean>(false);
    
    const [conversationsLoaded, setConversationsLoaded] = useState<Boolean>(false);
    useEffect(()=>{
        if(data){
            
            setMessages(data?.conversationsReceived)
            
            setStartedConversation(data?.conversationsStarted)
            
            setConversationsLoaded(true)
            console.log(data)
            console.log(startedConversations)
        }
    },[data, isLoading])
  
    const gg = useConversation({user})
   
    async function handleConversationSelect(message:any){
        try {

           
           const {data,error}:any = await supabase
           .from("conversation_messages")
           .select("*")
           .eq("conversation_id",message.id)
          
           setConversation(data)
            setConversationId(message.id)
            setConversationSelected(true)
           console.log(data)
          

          

        } catch (err:any) {
            console.error(err.message)
        }
    }

if(isLoading){
    return <Loader></Loader>
}

  return (
    <div className={s.container}>
        
        <div className={s.firstcontainer}>
        <div className={s.messages}>
            <span>
                Selling
            </span>
        {conversationsLoaded ? messages.map((message:any)=>(
            <div className={s.messagecard} key={message.id} onClick={()=>handleConversationSelect(message)}>
                <InboxPreviewCard conversationId={Number(message.id)} listingId={Number(message.listing_id)} sender={message.sender} />
            </div>
        )) : <>loading...</>}
        </div>
        <div className={s.messages}>
        <span>
                Buying
            </span>
        {conversationsLoaded ? startedConversations.map((message:any)=>(
            <div className={s.messagecard} key={message.id} onClick={()=>handleConversationSelect(message)}>
                <InboxPreviewCard conversationId={Number(message.id)} listingId={Number(message.listing_id)} sender={message.sender} />
            </div>
        )) : <>loading...</>}
        </div>
        </div>
        <div className={s.conversation}>
           {conversationSelected ?  <InboxConversationComponent conversationId={conversationId} user={user} conversation={conversation}/> : 
           <div className="w-full h-full flex justify-center items-center border-r md:border-l-0 border-l border-b">
            <div className={s.middle}>
                <span className="tracking-tighter text-gray-500">
                    No conversation.
                </span>
            </div>
            </div>}
        </div>
    </div>
  )
}

export default InboxComponent