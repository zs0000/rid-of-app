import s from "./AvailablePage.module.css"
import ProtectedWrapper from '../../components/ProtectedWrapper/ProtectedWrapper'

function AvailablePage() {
  return (
    <ProtectedWrapper>
        <div className={s.container}>
            yo
        </div>
    </ProtectedWrapper>
  )
}

export default AvailablePage