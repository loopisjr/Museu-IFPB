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
          <a href="https://www.instagram.com/loopisjr" target='_blank'>
            <img src={instagram} alt="Icon do instagram" />
          </a>
          <a href="https://www.linkedin.com/company/loopisjr/posts" target='_blank'>
            <img src={facebook} alt="Icon do facebook" />
          </a>
          <a href="https://www.linkedin.com/company/loopisjr/posts" target='_blank'>
            <img src={linkedin} alt="Icon do linkedin" />
          </a>
        </div>
      </div>
    </footer>
  )
}
