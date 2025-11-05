import Footer from "../Footer";
import Header from "../Header";
import style from "./layout.module.css"

interface props {
  children: React.ReactNode
}

export default function Layout({children}: props) {
  return (
    <div className={style.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
