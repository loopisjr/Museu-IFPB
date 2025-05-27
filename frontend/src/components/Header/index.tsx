import { Link } from 'react-router'
import Logo from '../Logo'
import style from './header.module.css'
import Dropdown from '../Dropdown'
import menuIcon from '../../assets/icons/menu.svg'
import { useState } from 'react'

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
          <li>
            <Link className={style.item} to="/" >Home</Link>
          </li>
          <li>
            <Dropdown />
          </li>
          <li>
            <Link className={style.item} to="/as" >Home</Link>
          </li>
          <li>
            <Link className={style.item} to="/" >Home</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
