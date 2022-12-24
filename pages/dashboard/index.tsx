import React from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProtectedWrapper from '../../components/ProtectedWrapper/ProtectedWrapper'
import useUser from '../../hooks/useUser';
import s from "./Dashboard.module.css"

function Dashboard() {
    const {data,isLoading, isError} =useUser();
    
  return (
    <ProtectedWrapper>
        <div className={s.container}>
            {isLoading ? <> ...</> :<ProfileCard data={data} />}
        </div>
    </ProtectedWrapper>
  )
}

export default Dashboard