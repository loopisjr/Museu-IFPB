import style from "./author.module.css"
import { useEffect } from "react"
/* import facebook from "../../assets/icons/facebook-color.png"
import instagram from "../../assets/icons/instagram-color.png"
import linkedin from "../../assets/icons/linkedin-color.png" */

export default function Author() {
  useEffect(()=>{
    document.title = "Autor"
  }, []);
  
  return (
    <div className={`${style.container} container`}>
      <img src="/images/author/cliente.jpg" alt="Autor" />
      <div className={style.content}>
        <div className={style.header}>
          <h1 className={style.authorName}>José Sérgio Aristides Lira</h1>
          <p className={style.authorProfession}>PESQUISADOR E ESTUDANTE</p>
        </div>
        <div>
          <p className={style.authorBody}>
            Meu nome é José Sérgio Aristides Lira. Sou graduado em História pela Universidade Federal de Campina Grande (UFCG), com especialização no Ensino de História pela Faculdade Única de Ipatinga. Sou também Técnico em Segurança do Trabalho pelo Instituto Federal da Paraíba (IFPB) – Campus Cajazeiras e mestrando em Educação Profissional e Tecnológica (ProfEPT) no Instituto Federal do Sertão Pernambucano – Campus Salgueiro.
Trabalhei por sete anos na Companhia de Águas e Esgotos da Paraíba (CAGEPA) e, desde 2016, sou servidor técnico-administrativo em Educação no Instituto Federal da Paraíba, tendo atuado nos campi Catolé do Rocha e Cajazeiras.
          </p>
        </div>
        {/* <div className={style.boxIcons}>

          <img className={style.icon} src={facebook} alt="Icon facebook" />
          <img className={style.icon} src={instagram} alt="Icon instagram" />
          <img className={style.icon} src={linkedin} alt="Icon linkedin " />

        </div> */}
      </div>
    </div>
  )
}

