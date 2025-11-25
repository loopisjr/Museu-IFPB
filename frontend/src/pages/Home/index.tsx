import AboveTheFold from '../../components/AboveTheFold';
import BannerCajazeiras from '../../components/BannerCajazeiras';
import Title from '../../components/Title';
import style from './home.module.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(()=>{
    document.title = "Home"
  }, []);
  return (
    <div className={style.content}>
      <AboveTheFold title={'Memória e Formação'} pictureURL={'/images/GOPR0042.JPG'}>
        <>
          <h2>Um site dedicado à história e às memórias do Campus Cajazeiras</h2>
          <p>Este site reúne registros documentais, imagens e dados históricos que contam a trajetória do Campus Cajazeiras do Instituto Federal da Paraíba.</p>
        </>
      </AboveTheFold>
      <div className={style.textArea}>
        <Title margin={'auto'} content={'Origem do projeto'} greenBarWidth='auto' />
        <p>O presente site, voltado ao registro das memórias e da história institucional do Campus Cajazeiras, é resultado de uma pesquisa desenvolvida no âmbito da elaboração de um produto educacional vinculado ao Mestrado Profissional em Educação Profissional e Tecnológica. Ao mesmo tempo, apresenta-se como uma ferramenta pedagógica de apoio ao ensino, à pesquisa e à extensão, ampliando o acesso à história e às memórias do Campus e possibilitando novas formas de reconhecimento de seu percurso institucional.</p>
      </div>
      <div className={style.textArea}>
        <Title margin={'auto'} content={'Objetivos'} greenBarWidth='auto' />
        <p>Mais do que um repositório de informações, o material aqui apresentado busca contribuir para a valorização da memória institucional do Campus Cajazeiras do IFPB e para o fortalecimento dos vínculos que conectam diferentes gerações de estudantes, servidores e servidoras, trabalhadores e trabalhadoras terceirizados, famílias e comunidade local.</p>
        <p>Escrever sobre a história do Campus Cajazeiras é também fortalecer os laços entre as pessoas que aqui passaram e continuam vivenciando seus espaços, em diferentes tempos e contextos, compondo a história viva desta instituição pública. As memórias registradas neste ambiente digital refletem não apenas marcos administrativos e pedagógicos, mas também as múltiplas experiências institucionais vivenciadas por aqueles e aquelas que participaram, e ainda participam, da construção do cotidiano educacional deste campus, situado no Alto Sertão da Paraíba.</p>
      </div>
      <BannerCajazeiras
        title={'Campus Cajazeiras'}
        subtitle={''}
        className={style.container}
        description={'Ao longo de sua trajetória, o Campus Cajazeiras tem cumprido sua missão de oferecer formação profissional de qualidade e de constituir-se como espaço de desenvolvimento humano, cidadão e social. Desse modo, contribui não apenas para o registro histórico de sua identidade, mas também para o fortalecimento da institucionalidade e para a valorização das experiências que aqui se entrelaçam, formando pessoas não apenas para o mundo do trabalho, mas para a vida em sociedade.'}
        pictureURL={'/images/GOPR0042.JPG'}
        altText={'Fachada do Instituto Federal da Paraíba – Campus Cajazeiras, com prédio de tijolos à vista e concreto, entrada central envidraçada, ladeada por jardins bem cuidados com flores vermelhas e palmeiras, sob um céu parcialmente nublado.'}
      />
      <div className={style.textArea}>
        <p>Como produto educacional vinculado a um trabalho de pesquisa acadêmica, este site também se apresenta como ferramenta pedagógica de apoio ao ensino, à pesquisa e à extensão, ampliando o acesso à história do Campus e possibilitando novas formas de apropriação do seu percurso institucional.</p>
        <Title margin={'2rem auto'} content={'Uma excelente visita ao presente acervo!'} greenBarWidth='auto' />
      </div>
    </div>
  )
}

