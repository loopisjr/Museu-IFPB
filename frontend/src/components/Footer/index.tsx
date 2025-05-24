import Logo from '../Logo'
import style from './footer.module.css'

import instagram from '../../assets/icons/insta.svg'
import facebook from '../../assets/icons/facebook.svg'
import linkedin from '../../assets/icons/linkedin.svg'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <Logo />
        <p className={style.loopis}>Desenvolvido pela empresa Loopis Jr</p>
        <div className={style.redessociais}>
          <img src={instagram} alt="Icon do instagram" />
          <img src={facebook} alt="Icon do facebook" />
          <img src={linkedin} alt="Icon do linkedin" />
        </div>
      </div>
    </footer>
  )
}
