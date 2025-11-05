import Timeline from "../../components/TimeLine";
import DirectorsCard from "../../components/timelineCard";
import Title from "../../components/Title";
import style from './TimelinePage.module.css';

export default function TimelinePage() {
  return (
    <div className={style.content}>
      <Title content="Mapa Histórico do IFPB - Campus Cajazeiras" greenBarWidth="auto"/>
      <h2 className={style.subtitle}>Rememorando o passado para reconhecer o presente</h2>
      <Timeline items={[{
        element: <DirectorsCard 
          title="Projeto de lei de criação da UNED/CZ"
          pictureURL="/images/timeline/image1.png"
          pictureAlt={`Figura 1 - A imagem mostra uma página em preto e branco, com o título centralizado no topo: "A origem de tudo:" Subtítulo: "Cronologia do processo legislativo que culminou com a edição da Lei nº 7.741 de 20 de março de 1989, que autorizou a criação da Escola Técnica Federal de Cajazeiras. Logo abaixo, há dois blocos de texto, ambos com o brasão da República Federativa do Brasil no topo e o título: "CÂMARA DOS DEPUTADOS" Cada bloco é identificado como um PROJETO DE LEI, com textos densos e estruturados em artigos e parágrafos.`}
          content={["Projeto de Lei nº 3305-A de 1984 de autoria do deputado federal Edme Tavares, criou a UNED Cajazeiras. Esse projeto de Lei foi aprovado pela Câmera dos deputados e sancionado pelo então presidente da República José Sarney, no dia 20 de março de 1989."]}
        />,
        date: '1984'
      },{
        element: <DirectorsCard 
          title="Escola Técnica Federal da Paraíba"
          pictureURL="/images/timeline/image2.png"
          pictureAlt="Figura 2 - Fachada da ETFPB Campus João Pessoa, imagem retirada de documentário de 1989"
          content={["Até 1989 a Escola Técnica Federal da Paraíba (ETFPB) possuía apenas o campus da capital João Pessoa, mas o deputado federal cajazeirense Edme Tavares, vendo a necessidade de interiorização dessa instituição, consegue aprovação do seu projeto de Lei de nº 3305-A e trás para Cajazeiras uma Unidade de Ensino Decentralizada (UNED) da ETFPB"]}
        />,
        date: '1989'
      },{
        element: <DirectorsCard 
          title="Lançamento da pedra fundamental"
          pictureURL="/images/timeline/image3.png"
          pictureAlt="Figura 3 - À esquerda imagem da pedra fundamental, À direita imagem da população cajazeirense assistindo ao evento."
          content={["Lançamento da pedra fundamental, pelo Ministério da Educação, para construção da primeira UNED da Paraíba. O presente evento se deu em dezembro de 1989 e contou com a presença de autoridades e da população cajazeirense."]}
        />,
        date: '1989'
      },{
        element: <DirectorsCard 
          title="Início das obras"
          pictureURL="/images/timeline/image4.png"
          pictureAlt="Figura 4 - Duas fotografias que mostram o processo de construção, é possível ver vigas de sustentação, e pedreiros trabalhando na obra."
          content={["As obras tiveram início no começo de 1990, vindo a ser paralisadas em julho deste mesmo ano por falta de recursos, mas em junho do ano seguinte retorna e é concluída em 1994."]}
        />,
        date: '1990'
      },{
        element: <DirectorsCard 
          title="Autorização de funcionamento"
          pictureURL="/images/timeline/image6.png"
          pictureAlt={`Figura 5 - Imagem de um documento oficial impresso em preto e branco. O topo do documento contém a inscrição: "Ministério da Educação e do Desporto". Abaixo, lê-se: "GABINETE DO MINISTRO. PORTARIA Nº 982, DE 28 DE JUNHO DE 1994". Segue o corpo do texto: "O Ministro de Estado da Educação e do Desporto, no uso de suas atribuições e de conformidade com o art. 5§ da Lei n° 8.670, de 30 de junho de 1993 e Portaria Ministerial n° 67, de 6 de fevereiro de 1987, resolve: 1 - Autorizar a Escola Técnica Federal da paraíba e promover o funcionamento da Unidade de Ensino Descentralizada - UNED de Cajazeiras-PB, nos termos do processo n° 23000.001218/89-18 - MEC - com o regime didático constante do mesmo. 2 - Esta Portaria entrará em vigor na data de sua publicação." Assinatura: Murílio de Avellar Hingel`}
          content={["Publicação da autorização de funcionamento da UNED/CZ se deu através da portaria nº 982 de 28 de junho de 1994, pelo ministro da educação Murílio de Avellar Hingel, no Diário Oficial no dia 22 de março de 1995."]}
        />,
        date: '1994'
      },{
        element: <DirectorsCard 
          title="Inauguração"
          pictureURL="/images/timeline/image7.png"
          pictureAlt="Figura 6 - Colagem de 3 fotografias, à esquerda, momento do corte da fita de inauguração, ao meio vemos foto do Ministro da Educação Murílio Hingel e outras autoridades como o governador do estado da Paraíba no auditório do campus, à direita pessoas de pé atrás dos mastros de bandeira."
          content={["A inauguração ocorreu no dia 04 de dezembro de 1994, a solenidade contou com a presença do Ministro da Educação Murílio Hingel e outras autoridades como o governador do estado da Paraíba, Cícero Lucena e o prefeito cajazeirense José Nello Zerinho Rodrigues. Além de um grande número da população cajazeirense."]}
        />,
        date: '1994'
      },{
        element: <DirectorsCard 
          title="Primeiros servidores"
          pictureURL="/images/timeline/image9.png"
          pictureAlt="Figura 7 - Primeiros servidores da instituição em frente a entrada do campus."
          content={["Primeiros servidores da instituição, foto registrada em janeiro de 1995."]}
        />,
        date: '1995'
      },{
        element: <DirectorsCard 
          title="Primeiro planejamento pedagógico"
          pictureURL="/images/timeline/image10.png"
          pictureAlt="Figura 8 - Professora Maria de Lourdes em sala de aula."
          content={["O primeiro planejamento pedagógico da instituição foi realizado no dia 03 de março de 1995, pela professora Maria de Lourdes Campus da Universidade Federal da Paraíba (UFPB) campus V da capital João Pessoa."]}
        />,
        date: '1995'
      },{
        element: <DirectorsCard 
          title="Primeiro dia de aula"
          pictureURL="/images/timeline/image11.png"
          pictureAlt="Figura 9 - Album de imagens com 10 fotos, todas recordando um momento do primeiro dia de aula da instituição."
          content={["Primeiro dia de aula da instituição no dia 27 de março de 1995, esse evento contou com o hasteamento das bandeiras, uma missa com o padre Francivaldo do Nascimento Albuquerque e visita dos alunos à biblioteca."]}
        />,
        date: '1995'
      },{
        element: <DirectorsCard 
          title="Primeiras turmas concluintes"
          pictureURL="/images/timeline/image12.png"
          pictureAlt="Figura 10 - Duas imagens uma em cima dá outra, cada uma mostra uma turma reunida para foto de comemoração de conclusão de curso."
          content={["Turmas pioneiras concluintes dos cursos de Eletromecânica e Agrimensura, estes foram os primeiros alunos da UNED de Cajazeiras. Iniciaram seus estudos na instituição no dia 27 de março de 1995 e formaram-se em 30 de janeiro de 1999."]}
        />,
        date: '1999'
      },{
        element: <DirectorsCard 
          title="Solenidade de transformação em CEFETPB"
          pictureURL="/images/timeline/image14.png"
          pictureAlt="Figura 11 - Colagem de quatro imagens mostrando diferentes momentos das reuniões e inauguração da CEFETPB"
          content={["Solenidade de transformação de Unidade Decentralizada da Escola Técnica Federal da Paraíba para Centro Federal de Educação Tecnológica da Paraíba (CEFETPB). O evento ocorreu em 27 de maio de 1999."]}
        />,
        date: '1999'
      },{
        element: <DirectorsCard 
          title="Mudança para IFPB"
          pictureURL="/images/timeline/image15.jpeg"
          pictureAlt="Figura 12 - Entrada do IFPB - Campus Cajazeiras."
          content={["O campus utilizou a nomenclatura CEFET por cerca de dez anos, já que no dia 29 de dezembro de 2008, o presidente Luiz Inácio Lula da Silva, sancionou a Lei de nº 11.892, criando os Institutos Federais."]}
        />,
        date: '2008'
      },{
        element: <DirectorsCard 
          title="Galeria dos ex-diretores do IFPB de Cajazeiras"
          pictureURL="/images/timeline/image16.jpeg"
          pictureAlt="Figura 13 - Imagem do 1º andar do bloco administrativo, galeria dos ex-diretores da instituição. A galeria apresenta as fotografias dos ex-diretores e os respectivos períodos de suas gestões."
          content={["Durante os trinta anos de existência, o instituto já contou com a administração de oito diretores gerais, o primeiro deles foi o professor Antônio Carlos Gomes Varela (15/07/1994 a 08/06/1995), o Professor João Batista de Oliveira Silva (09/06/1995 a 19/02/2001), o Professor Dimas Andriola Pereira (19/022001 a 27/06/2021 – 06/07/2006 a 11/07/2007), Roscellino Bezerra de Mello Júnior (27/06/2001a 01/07/2002 – 11/07/2007 a 14/07/2010), Maria de Fátima Vieira Cartaxo (01/07/2002 a 06/07/2006), Valnir Vasconcelos Lira (14/07/2010 a 20/08/2014) e Lucrécia Teresa Gonçalves Petrucci (21/08/2014 a 21/10/2022). Atualmente o professor Abinadabe Silva Andrade está exercendo seu primeiro mandato desde 21 de outubro 2022."]}
        />,
        date: '2024'
      },{
        element: <DirectorsCard 
          title="IFPB/CZ atualmente"
          pictureURL="/images/timeline/image17.png"
          pictureAlt="Figura 14 - Imagem aérea do IFPB - Campus Cajazeiras."
          content={["Trinta anos após sua inauguração, o IFPB campus Cajazeiras se destaca no alto sertão paraibano por oferecer aos seus estudantes, um ensino de qualidade e oportunidades de crescimento profissional e pessoal. Atualmente dispõe dos cursos técnicos integrais em Edificações, Eletromecânica, e Informática; os subsequentes em Eletromecânica, Edificações e Meio Ambiente (PROEJA) e a graduação em Análise e Desenvolvimento de Sistemas, Engenharia Civil, Engenharia de Controle e Automação e Licenciatura em Matemática. Já na pós - graduação oferece Especialização em Matemática."]}
        />,
        date: '2025'
      }]} />
    </div>
  )
}

