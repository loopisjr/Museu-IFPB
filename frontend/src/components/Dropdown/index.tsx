import { useState } from 'react'
import chevron from '../../assets/icons/chevron-down.svg'
import style from "./dropdown.module.css"
import LinkHeader from '../LinkHeader'

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const dropdownStateClass = isOpen ? style.dropdownActived : style.dropdownDesactived

  function closeDropdown() {
    setIsOpen(false)
  }
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
          <LinkHeader onClick={closeDropdown} label="Cidade de Cajazeiras" path="/cidade-cajazeiras" type="dropdown" />
          <LinkHeader onClick={closeDropdown} label="Histórico do campus" path="/historico-campus" type="dropdown" />
          <LinkHeader onClick={closeDropdown} label="Galeria de diretores" path="/galeria-diretores" type="dropdown" />
        </ul>
      </div>
    </div>
  )
}
