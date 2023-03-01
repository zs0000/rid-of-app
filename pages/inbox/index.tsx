import { useRouter } from 'next/router'
import React from 'react'
import InboxComponent from '../../components/InboxComponent/InboxComponent'
import ProtectedWrapper from '../../components/ProtectedWrapper/ProtectedWrapper'
import useUser from '../../hooks/useUser'
import s from "./inbox.module.css"
function Inbox() {

    const {data,isLoading, isError} =useUser();
    
    return (
      <ProtectedWrapper>
          <div className={s.container}>
              {isLoading ? <> ...</> :<InboxComponent user={data.id} />}
          </div>
      </ProtectedWrapper>
    )
  }

export default Inbox