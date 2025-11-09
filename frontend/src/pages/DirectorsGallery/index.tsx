import Timeline from "../../components/TimeLine";
import DirectorsCard from "../../components/timelineCard";
import Title from "../../components/Title";
import style from './DirectorsGallery.module.css';
import { useEffect } from "react";

export default function DirectorsGallery() {
  useEffect(()=>{
    document.title = "Galeria de diretores";
  }, []);
  return (
    <div className={style.content}>
      <Title content="Galeria de diretores" greenBarWidth="auto"/>
      <h2 className={style.subtitle}>Linha do tempo histórica dos diretores da instituição.</h2>
      <Timeline items={[{
        element: <DirectorsCard 
          title="Designação do primeiro diretor da UNEDCZ"
          pictureURL="/images/directors/image1.jpeg"
          pictureAlt="Figura 1 - designação do primeiro diretor da UNEDCZ em 1994."
          content={["No dia 15 de julho de 1994, o então diretor-geral da Escola Técnica Federal da Paraíba (ETFPB), Bráulio Pereira Lins, mediante a Portaria nº 142, de 15 de julho de 1994, designou o professor Antônio Carlos Gomes Varela como diretor, para que este conduzisse a instalação e a preparação para o funcionamento da nova unidade de ensino.", "O diretor pioneiro da instituição cumpriu sua missão: adquiriu os equipamentos para os laboratórios, os mobiliários e a mão de obra servidora.", "Os primeiros servidores ingressaram na Unidade de Ensino Descentralizada de Cajazeiras (UNED-CZ) por meio de concursos públicos realizados em agosto de 1994.", "Seu mandato ocorreu no período de 15/07/1994 a 08/06/1995."]}
        />,
        date: '15 de julho de 1994'
      },{
        element: <DirectorsCard 
          title="Posse do segundo diretor da UNEDCZ"
          pictureURL="/images/directors/image2.jpeg"
          pictureAlt="Figura 2 - posse do segundo diretor da UNEDCZ em 1995."
          content={["A Portaria nº 265, de 9 de junho de 1995, promoveu a nomeação do novo diretor da instituição, o professor João Batista de Oliveira Silva, nomeado pelo então diretor-geral da ETFPB, professor Almiro de Sá Ferreira.", "O professor João Batista de Oliveira Silva, que já ocupava o cargo desde 1995, permaneceu no CEFET até o ano de 2001.", "Até esse período, os diretores das unidades eram indicados pelos diretores-gerais."]}
        />,
        date: '9 de junho de 1995'
      },{
        element: <DirectorsCard 
          title="Posse do diretor interino do CEFETCZ"
          pictureURL="/images/directors/image3.jpeg"
          pictureAlt="Figura 3 - posse do diretor interino do CEFETCZ em 2001."
          content={["No entanto, diante da pressão de servidores e do sindicato, a Portaria nº 45, de 19 de fevereiro de 2001, designou o professor Dimas Andriola Pereira como diretor interino, com a finalidade de promover a eleição direta."]}
        />,
        date: '19 de fevereiro de 2001'
      },{
        element: <DirectorsCard 
          title="Posse do novo diretor da CEFETCZ"
          pictureURL="/images/directors/image4.jpeg"
          pictureAlt="Figura 4 - posse do novo diretor da CEFETCZ em 2001."
          content={["No dia 6 de junho de 2001, ocorreu a primeira eleição direta para a direção-geral da instituição.","Concorreram ao cargo de diretor os professores Chaquibe Costa de Farias, Francisco Thadeu Carvalho de Matos e Roscellino Bezerra de Mello Júnior.", "Este saiu vencedor com 44,93% dos votos, sendo nomeado pela Portaria nº 177, de 27 de junho de 2001, e permaneceu no cargo por apenas um ano, pois se afastou em 1º de junho de 2002."]}
        />,
        date: '27 de junho de 2001'
      },{
        element: <DirectorsCard 
          title="Posse da diretora interina da CEFETCZ"
          pictureURL="/images/directors/image5.jpeg"
          pictureAlt="Figura 5 - posse da diretora interina da CEFETCZ em 2002."
          content={["Com o afastamento do professor Roscellino, assumiu interinamente a direção do CEFET-CZ a servidora Maria de Fátima Vieira Cartaxo, nomeada pela Portaria nº 137, de 1º de julho de 2002."]}
        />,
        date: '1º de julho de 2002'
      },{
        element: <DirectorsCard 
          title="Posse da diretora eleita da CEFETCZ"
          pictureURL="/images/directors/image6.jpeg"
          pictureAlt="Figura 6 - posse da diretora eleita da CEFETCZ em 2003."
          content={["O novo pleito ocorreu em 18 de junho de 2003, quando a então diretora, Maria de Fátima Vieira Cartaxo, concorreu com o professor Francisco Emanuel Ferreira de Almeida.", "Fátima foi eleita com a maioria dos votos, para um mandato de quatro anos."]}
        />,
        date: '18 de junho de 2003'
      },{
        element: <DirectorsCard 
          title="Eleição para diretor-geral do CEFET-PB"
          content={["Em 2006, ocorreu a eleição para diretor-geral do CEFET-PB, tendo saído vitorioso do pleito o professor João Batista de Oliveira Silva. Este dispensou Fátima Cartaxo e designou o professor Dimas Andriola Pereira para o cargo, mediante a Portaria nº 198, de 6 de julho de 2006."]}
        />,
        date: '6 de julho de 2006'
      },{
        element: <DirectorsCard 
          title="Nova consulta para a escolha do diretor"
          content={["No ano seguinte, deu-se uma nova consulta para a escolha do diretor, saindo vitorioso o professor Roscellino Bezerra de Mello Júnior, tendo sua nomeação sido publicada na Portaria nº 335, de 11 de julho de 2007, para o seu segundo mandato como diretor do campus."]}
        />,
        date: '11 de julho de 2007'
      },{
        element: <DirectorsCard 
          title="Criação dos Institutos Federais de Educação, Ciência e Tecnologia"
          content={["Em 29 de dezembro de 2008, foram criados os Institutos Federais de Educação, Ciência e Tecnologia, por intermédio da Lei nº 11.892/2008.", "Com a mudança de nomenclatura do campus, o diretor Roscellino Bezerra de Mello Júnior foi destituído e nomeado como diretor-geral, permanecendo na função até 14 de julho de 2010."]}
        />,
        date: '29 de dezembro de 2008'
      },{
        element: <DirectorsCard 
          title="Consulta no Instituto para a eleição do novo diretor"
          content={["No dia 28 de março de 2010, ocorreu a consulta no Instituto para a eleição do novo diretor.", "Os concorrentes foram Maria de Fátima Vieira Cartaxo e Valnyr Vasconcelos Lira, sendo este o vencedor do pleito.", "Ele dirigiu a instituição de 14/07/2010 a 20/08/2014."]}
        />,
        date: '28 de março de 2010'
      },{
        element: <DirectorsCard 
          title="Lucrécia eleita como diretora-geral"
          content={["Valnyr não concorreu à reeleição no pleito de 2014, apoiando a pedagoga Lucrécia Teresa Gonçalves Petrucci, que disputou o cargo com o também pedagogo Gilvandro Vieira da Silva.", "Lucrécia saiu vitoriosa com a maioria dos votos, permanecendo na Direção-Geral de 21/08/2014 a 21/10/2022."]}
        />,
        date: '21 de agosto de 2014'
      },{
        element: <DirectorsCard 
          title="Abinadabe eleito como diretor-geral"
          pictureURL="/images/directors/image7.jpeg"
          pictureAlt="Figura 7 - Posse do diretor eleito da IFPBCZ em 2022"
          content={["No pleito de 2022, Lucrécia apoiou o professor Abinadabe Silva Andrade, que concorreu com o também professor Francisco Daladier Marques Junior.", "Abinadabe foi eleito e está exercendo seu primeiro mandato desde 21 de outubro de 2022."]}
        />,
        date: '21 de outubro de 2022'
      },{
        element: <DirectorsCard 
          title="Inauguração da galeria dos ex-diretores"
          pictureURL="/images/directors/image8.jpeg"
          pictureAlt="Figura 8 - Galeria dos ex-diretores"
          content={["Em 4 de dezembro de 2024, durante as comemorações dos 30 anos do Instituto Federal da Paraíba – Campus Cajazeiras, a Direção-Geral inaugurou, no 1º andar do bloco administrativo, uma galeria dos ex-diretores da instituição.", "A galeria apresenta as fotografias dos ex-diretores e os respectivos períodos de suas gestões."]}
        />,
        date: '4 de dezembro de 2024'
      },]} />
    </div>
  )
}

