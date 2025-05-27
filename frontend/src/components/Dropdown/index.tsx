import { useState } from 'react'
import chevron from '../../assets/icons/chevron-down.svg'
import style from "./dropdown.module.css"
import { Link } from 'react-router'

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const dropdownStateClass = isOpen ? style.dropdownActived : style.dropdownDesactived
  return (
    <div className={style.dropdownRoot}>
      <div >
        <div className={style.dropdownHead} onClick={() => setIsOpen(!isOpen)}>
          <div>
            <p>Histórico</p>
            <img src={chevron} />
          </div>
        </div>
      </div>

      <div className={`${style.dropdownBody} ${dropdownStateClass}`}>
        <ul className={style.links}>
          <li>
            <Link className={style.item} to="/" >Cidade de Cajazeiras</Link>
          </li>
          <li>
            <Link className={style.item} to="/" >Histórico do campus</Link>
          </li>
          <li>
            <Link className={style.item} to="/" >Galeria de diretores</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
