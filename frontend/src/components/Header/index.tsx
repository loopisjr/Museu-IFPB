import Logo from '../Logo'
import style from './header.module.css'
import Dropdown from '../Dropdown'
import menuIcon from '../../assets/icons/menu.svg'
import { useState } from 'react'
import LinkHeader from '../LinkHeader'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const headerStateClass = isOpen ? style.linksActived : style.linksDesactived
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.head}>
          <Logo />
          <img className={style.toggle} src={menuIcon} onClick={handleToggle}/>
        </div>
        <ul className={`${style.links} ${headerStateClass}`}>
          <LinkHeader label="Home" path="/" />
          <li>
            <Dropdown />
          </li>
          <LinkHeader label="Linha do tempo" path="/linha-do-tempo" />
          <LinkHeader label="Galeria" path="/galeria" />
          <LinkHeader label="Questionario" path="https://forms.gle/fdbpjSbeSEPeTz5C6" />
          <LinkHeader label="Obras" path="/obras" />
          <LinkHeader label="Autor" path="/autor" />
        </ul>
      </div>
    </header>
  )
}
