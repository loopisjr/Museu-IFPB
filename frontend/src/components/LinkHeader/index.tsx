import { Link } from "react-router"
import style from "./linkheader.module.css"
import { useLocation } from "react-router"
interface props {
  label: string,
  path: string,
  type?: string,
  onClick?: () => void
}
export default function LinkHeader({label, path, type, onClick}: props) {
  const location = useLocation()
  const isActive = location.pathname === path

  const linkStyle = isActive ? style.itemActived : ""

  //Se o link for de um dropdown, o estilo dele vai ser diferente
  const liStyle = type === "dropdown" ? style.li : "";

  return (
    <li onClick={onClick} className={liStyle}>
      <Link className={`${style.item} ${linkStyle}`} to={path} >{label}</Link>
    </li>
  )
}
