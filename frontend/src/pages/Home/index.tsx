import AboveTheFold from '../../components/AboveTheFold';
import BannerCajazeiras from '../../components/BannerCajazeiras';
import Title from '../../components/Title';
import style from './home.module.css';

export default function Home() {
  return (
    <div className={style.content}>
      <AboveTheFold title={'Memória e Formação'} pictureURL={'/images/GOPR0042.JPG'}>
        <>
          <h2>Um site dedicado à história e às memórias do Campus Cajazeiras</h2>
          <p>Este site reúne registros documentais, imagens e dados históricos que contam a trajetória do Campus Cajazeiras do Instituto Federal da Paraíba.</p>
        </>
      </AboveTheFold>
      <div className={style.textArea}>
        <Title margin={'auto'} content={'Sobre'} greenBarWidth='auto' />
        <p>Mais do que um repositório de informações, o material aqui disponibilizado propõe-se a colaborar para a preservação da memória institucional e para o fortalecimento dos vínculos que unem diferentes gerações de estudantes, servidores, trabalhadores e trabalhadoras terceirizadas, famílias e comunidade local.</p>
        <p>Preservar a história do Campus Cajazeiras é também fortalecer os vínculos entre as pessoas que aqui passaram e continuam passando, em diferentes tempos e contextos, compondo a história viva desta instituição pública. As histórias registradas neste ambiente digital refletem não apenas os marcos administrativos e pedagógicos, mas também as múltiplas experiências pessoais e coletivas vivenciadas por aqueles e aquelas que construíram e seguem construindo o cotidiano da instituição.</p>
      </div>
      <BannerCajazeiras
        title={'Campus Cajazeiras'}
        subtitle={''}
        className={style.container}
        description={'O Campus Cajazeiras, ao longo de sua história, tem cumprido sua missão de oferecer formação profissional de qualidade, mas também de ser espaço de formação para a vida, promovendo o desenvolvimento de competências humanas, cidadãs e sociais. Contribui-se, assim, não só para o registro histórico, mas também para o fortalecimento da identidade institucional e para a valorização das experiências que aqui se entrelaçam, formando pessoas não apenas para o mundo do trabalho, mas para a vida em sociedade.'}
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

