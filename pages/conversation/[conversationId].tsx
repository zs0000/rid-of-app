import { useRouter } from "next/router"
import ConversationPageComponent from "../../components/ConversationPageComponent/ConversationPageComponent"
import ProtectedWrapper from "../../components/ProtectedWrapper/ProtectedWrapper"
import useUser from "../../hooks/useUser"
import s from "./conversationPage.module.css"

function conversationId() {
    const router = useRouter()
    const {conversationId} = router.query

   const{data, isLoading,error} = useUser()

   return (
    <ProtectedWrapper>
        {!isLoading ? 
        <div className={s.container}>
        <ConversationPageComponent user={data.id}  conversationId={Number(conversationId)}/>
    </div>
     : 
     <>
     Loading...
     </>}
    </ProtectedWrapper>
  )
}

export default conversationId