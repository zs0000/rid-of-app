import s from "./Footer.module.css"

function Footer() {
  return (
    <footer className={s.container}>
        <div className={s.items}>
        <div className={s.firstcontainer}> 
            <span>
            Contact
            </span>
        </div>
        <div className={s.secondcontainer}>
            <span>
            About
            </span>
        </div>
        </div>
    </footer>
  )
}

export default Footer