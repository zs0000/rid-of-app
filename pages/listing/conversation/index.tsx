import ProtectedWrapper from "../../../components/ProtectedWrapper/ProtectedWrapper"
import s from "./ConversationPage.module.css"

function ConversationPage() {
  return (
    <ProtectedWrapper>
        <div className={s.container}>
          <ConversationPage/>
        </div>
    </ProtectedWrapper>
  )
}

export default ConversationPage