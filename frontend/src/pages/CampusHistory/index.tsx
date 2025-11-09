import Title from "../../components/Title"
import ImageDescription from "../../components/ImageDescription"
import Paragraph from "../../components/Paragraph/Paragraph";
import Quote from "../../components/Quote/Quote";
import { useEffect } from "react";
const Figura1 = '/images/CampusHistory/Figura1.png';
const Figura2 = '/images/CampusHistory/Figura2.png';
const Figura3 = '/images/CampusHistory/Figura3.png';
const Figura4 = '/images/CampusHistory/Figura4.png';
const Figura5 = '/images/CampusHistory/Figura5.png';
const Figura6 = '/images/CampusHistory/Figura6.png';
const Figura7 = '/images/CampusHistory/Figura7.png';
const Figura8 = '/images/CampusHistory/Figura8.png';
const Figura9 = '/images/CampusHistory/Figura9.png';
const Figura10 = '/images/CampusHistory/Figura10.png';
const Figura11 = '/images/CampusHistory/Figura11.png';
const Figura12 = '/images/CampusHistory/Figura12.png';

import styles from "./CampusHistory.module.css";
export default function CampusHistory() {
  useEffect(()=>{
    document.title = "Histórico do Campus"
  }, []);

  return (
    <div className={styles.container}>
      <Title content="Breve Histórico" />
      <h3>Instituto Federal da Paraíba - Campus Cajazeiras</h3>

      <Paragraph>
        Unidade de ensino descentralizada (UNED), Cajazeiras.
      </Paragraph>

      <Paragraph>
        As Escolas de Aprendizes Artífices foram criadas pelo Decreto nº 7.566/1909, do então presidente da República Nilo Peçanha. A instituição
        foi instalada na Paraíba em 5 de janeiro de 1910, passando a funcionar no prédio do Primeiro Batalhão da Polícia Militar do Estado, localizado
        na Praça Pedro Américo, centro de João Pessoa, PB.
      </Paragraph>

      <div className={styles.imageCenter}>
        <ImageDescription
          pictureURL={Figura1}
          width="100%"
          description="Instalação da Escola de Aprendizes e Artífices da Paraíba em 1910."
          source="Fotografia da instalação da escola em 1990, 2025."
          numPicture={1}
        />
      </div>

      <Paragraph>
        Como essas escolas foram criadas apenas nas capitais brasileiras, a Escola Paraibana funcionou por mais de setenta anos somente na capital,
        João Pessoa. Durante esse período, sua nomenclatura foi sendo alterada: em 1937, passou a se chamar Liceu Industrial; em 1942, Escola Industrial
        de João Pessoa; nos anos 60, Escola Técnica Federal da Paraíba; em 1999, Centro Federal de Educação Tecnológica; e, finalmente, em 2008,
        passou a se chamar Instituto Federal da Paraíba.
      </Paragraph>

      <Paragraph>
        No ano de 1984, o então deputado federal cajazeirense Edme Tavares teve a ideia de implantar um campus da Escola Técnica da Paraíba (ETFPB) na
        cidade de Cajazeiras, funcionando como Unidade de Ensino Descentralizada (UNED). O então prefeito da cidade de Cajazeiras, Epitácio Leite Rolim,
        enviou, na data de 13 de janeiro de 1987, um ofício ao diretor da ETFPB, professor Espedito Pereira, demonstrando o grande interesse que a
        cidade tinha na implantação daquela grandiosa obra.
      </Paragraph>

      <Paragraph>
        A Figura 2 apresenta o Ofício nº 18/87 da Prefeitura Municipal de Cajazeiras-PB, oficializando o interesse do município na implantação da Escola 
        Técnica Federal da Paraíba e fazendo a doação de uma área de 3,9 hectares (39.000 m²), destinada à construção da referida unidade escolar.
      </Paragraph>

      <div className={styles.imageCenter}>
        <ImageDescription
          pictureURL={Figura2}
          width="100%"
          description="Ofício da Prefeitura Municipal de Cajazeiras."
          source="Arquivo institucional do IFPB Campus Cajazeiras."
          numPicture={2}
        />
      </div>

      <Paragraph>Nas palavras de Cruz (2021, p. 10-11):</Paragraph>

      <Quote>
        O Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, Campus Cajazeiras, é fruto das aspirações da sociedade dos sertões do Rio 
        Piranhas por conhecimento humano, profissionalizante, científico e tecnológico. A realização desse desejo iniciou-se por meio do Projeto de
        Lei n° 3305-A de 1984, implementado pelo então deputado federal Edme Tavares. Em 04 de dezembro de 1994, as portas se abrem: aconteceu a
        inauguração da Unidade de Ensino Descentralizada, sediada na cidade de Cajazeiras (UNED Cajazeiras), parte da Escola Técnica Federal da Paraíba.
      </Quote>

      <Paragraph>
        O Projeto de Lei nº 3305-A, de 1984, apresentado pelo então deputado federal Edme Tavares na Câmara Federal, dispõe sobre a criação da Escola
        Técnica Federal em Cajazeiras. A Figura 3 apresenta um recorte de jornal com o referido projeto de lei.
      </Paragraph>

      <div className={styles.imageCenter}>
        <ImageDescription
          pictureURL={Figura3}
          width="100%"
          description="Projeto de lei da implantação da UNED Cajazeiras."
          source="Arquivo institucional do IFPB Campus Cajazeiras."
          numPicture={3}
        />
      </div>

      <Paragraph>
        A implantação de uma Unidade de Ensino Descentralizada na cidade de Cajazeiras se justificava pela necessidade de interiorização do ensino técnico no Brasil, sendo considerada 
        uma cidade estratégica, por estar localizada próxima aos estados do Ceará, Rio Grande do Norte e Pernambuco. Considerando ainda que era uma das cidades mais desenvolvidas do Alto 
        Sertão Paraibano, possuía um índice significativo de jovens que necessitavam de profissionalização e está em uma área essencialmente agrícola. As informações encontram-se na proposta 
        de implantação demonstrada na Figura 4.
      </Paragraph>

      {/* Quarta imagem */}
      <div className={styles.imageCenter}>
        <ImageDescription
          pictureURL={Figura4}
          width="100%"
          description="Proposta de implantação da UNED Cajazeiras."
          source="Arquivo institucional do IFPB Campus Cajazeiras."
          numPicture={4}
        />
      </div>
      
      <Paragraph>
        Para Cruz, Alves e Gonçalves (2024), a implantação dessa instituição na cidade de Cajazeiras estava atrelada à situação em que se encontrava a EPT naquele momento: havia demanda por 
        matrículas, vontade política e social, além da necessidade de profissionais técnicos.
      </Paragraph>

      {/* Quinta imagem */}
      <div className={styles.imageCenter}>
        <ImageDescription
          pictureURL={Figura5}
          width="100%"
          description="Lançamento da pedra fundamental da UNED Cajazeiras em 1989."
          source="Arquivo institucional do IFPB Campus Cajazeiras."
          numPicture={5}
        />
      </div>

      <Paragraph>
        A Figura 5 mostra o lançamento da pedra fundamental da UNED Cajazeiras. Esta foi lançada em 1º de dezembro de 1989, sendo este o marco inicial da construção dessa instituição de ensino.
      </Paragraph>

      <Paragraph>
        A autorização de funcionamento da UNED Cajazeiras se deu por meio da Portaria nº 982, de 28 de junho de 1994, emitida pelo Ministério da Educação e do Desporto (Brasil, 1994a). A publicação 
        ocorreu no D.O.U. em 29 de junho de 1994, e a unidade foi inaugurada em 4 de dezembro do mesmo ano, como assegura o PDI do IFPB (2020–2024):
      </Paragraph>

      <Quote>
        O terreno em que o Campus funciona foi doado em 19 de janeiro de 1987 pela Lei Municipal nº 837 e suas obras se iniciaram em 01 de dezembro de 1989, mas foi somente no ano de 1994 que ocorreram 
        os últimos atos preparatórios para inauguração da ETF de Cajazeiras. Primeiro, com a autorização de funcionamento da UNED por meio da Portaria nº 982 de 28 de junho de 1994 publicada no D.O.U em 
        29 de junho de 1994, e, posteriormente, em 04 de dezembro de 1994, com a inauguração da instituição que ainda era denominada Escola Técnica Federal da Paraíba. A Unidade de Ensino Descentralizada, 
        como era chamada, foi criada para atender às necessidades da região, dentro da perspectiva de interiorização da educação profissional. Cajazeiras foi a segunda cidade paraibana a receber um Campus 
        do IFPB (IFPB, 2024, p. 91).
      </Quote>

      {/* Sexta imagem */}
      <div className={styles.imageCenter}>
        <ImageDescription
          pictureURL={Figura6}
          width="100%"
          description="Portaria nº 982, de 28 de junho de 1994."
          source="Arquivo institucional do IFPB Campus Cajazeiras."
          numPicture={6}
        />
      </div>

      <Paragraph>
        No dia 15 de julho de 1994, o então diretor-geral da Escola Técnica Federal da Paraíba, Bráulio Pereira Lins, designou o professor Antônio Carlos Gomes Varela como diretor, para que este conduzisse 
        a instalação e a preparação para o funcionamento da nova unidade de ensino. A Figura 7 exibe a designação do primeiro diretor da UNED Cajazeiras.
      </Paragraph>

      {/* Sétima imagem */}
      <div className={styles.imageCenter}>
        <ImageDescription
          pictureURL={Figura7}
          width="100%"
          description="Designação do primeiro diretor da UNED."
          source="Arquivo institucional do IFPB Campus Cajazeiras."
          numPicture={7}
        />
      </div>

      <Paragraph>
        Após a aquisição de equipamentos e mobiliários, era hora de providenciar a mão de obra que atuaria na nova instituição. Em agosto de 1994, foram realizados os primeiros concursos públicos para o 
        preenchimento de vagas do quadro permanente de servidores da ETFPB/UNED – Cajazeiras.
      </Paragraph> 

      <Paragraph>
        O Edital nº 02/94 ofertou 97 vagas para diversos cargos técnico-administrativos. Já para o magistério, o Edital nº 03/94 abriu 25 vagas para professores do ensino de 1º e 2º graus, como detalham 
        as Figuras 8 e 9.
      </Paragraph>   

      {/* Oitava imagem */}
      <div className={styles.imageCenter}>
        <ImageDescription
          pictureURL={Figura8}
          width="100%"
          description="1º concurso público para o magistério."
          source="Arquivo institucional do IFPB Campus Cajazeiras."
          numPicture={8}
        />
      </div>

      {/* Nona imagem */}
      <div className={styles.imageCenter} style={{ maxWidth:'300px'}}>
        <ImageDescription
          pictureURL={Figura9}
          width="100%"
          description="1º concurso público para Técnico administrativo."
          source="Arquivo institucional do IFPB Campus Cajazeiras."
          numPicture={9}
        />
      </div>

      <Paragraph>
        No dia 4 de dezembro do mesmo ano, o então ministro da Educação, Murílio de Avelar Hingel, esteve em Cajazeiras para a solenidade de inauguração, como mostra a Figura 10.
      </Paragraph>

      {/* Décima imagem */}
      <div className={styles.imageCenter}>
        <ImageDescription
          pictureURL={Figura10}
          width="100%"
          description="Inauguração UNED Cajazeiras."
          source="Arquivo institucional do IFPB Campus Cajazeiras."
          numPicture={10}
        />
      </div>

      <Paragraph>
        O deputado federal Edme Tavares, responsável pela implantação de uma unidade descentralizada da Escola Técnica Federal da Paraíba, distribuiu diversos convites aos cajazeirenses
        para que se fizessem presentes no dia 4 de dezembro de 1994, na inauguração da Escola Técnica.
      </Paragraph>

      <Paragraph>
        Nas palavras do deputado: “A criação e construção da Escola Técnica representou uma das minhas grandes conquistas na Câmara dos Deputados. Primeiro, o compromisso. Agora, a realização. 
        A Escola Técnica está presente em solo firme na terra cajazeirense, em nome da promoção da juventude e do desenvolvimento”.
      </Paragraph>

      <Paragraph>
        A Figura 11 apresenta o convite à inauguração.
      </Paragraph>

      {/* Décima primeira imagem */}
      <div className={styles.imageCenter}>
        <ImageDescription
          pictureURL={Figura11}
          width="100%"
          description="Convite do Deputado Edme Tavares para a inauguração da UNED Cajazeiras."
          source="Arquivo institucional do IFPB Campus Cajazeiras."
          numPicture={11}
        />
      </div>

      <Paragraph>
        Como programado, no dia 4 de dezembro de 1994, a inauguração se deu com a presença do então ministro da Educação, Murílio Hingel, 
        e de outras autoridades, como o governador do Estado da Paraíba, Cícero Lucena, o prefeito cajazeirense José Nello Zerinho 
        Rodrigues, e um elevado número de populares da cidade e da região.
      </Paragraph>

      <Paragraph>
        Desde a sua inauguração até os dias atuais, o IFPB Campus Cajazeiras vem contribuindo para o desenvolvimento não somente da cidade 
        de Cajazeiras, mas de toda a região circunvizinha, composta por parte dos estados da Paraíba, Ceará e Rio Grande do Norte.
      </Paragraph>

      <Paragraph>
        A princípio, a nova unidade de ensino cajazeirense ofertou 200 vagas para o ingresso de discentes, sendo 120 para o curso de 
        Eletromecânica e 80 para o de Agrimensura. Este último foi extinto após a conclusão da primeira turma, já que, na época, 
        avaliou-se que a região não absorveria esses profissionais. A aula magna foi proferida pelo professor Expedito Pereira, 
        ex-diretor-geral da Escola Técnica Federal da Paraíba, no dia 27 de março de 1995, marcando o início do primeiro dia letivo 
        dessa instituição.
      </Paragraph>

      <Paragraph>
        A Unidade de Ensino Descentralizada de Cajazeiras teve os seguintes diretores: o professor Antônio Carlos Gomes Varela, 
        nomeado pela Portaria nº 142, de 15 de julho de 1994, permanecendo nesse posto até 8 de junho de 1995; e o professor 
        João Batista de Oliveira Silva, nomeado como novo diretor pela Portaria nº 265, de 9 de junho de 1995, permanecendo 
        no cargo até 19 de fevereiro de 2001.
      </Paragraph>

      <h3>Centro Federal De Educação Tecnológica Da Paraíba (CEFET/PB)</h3>
      <Paragraph>
        O ano era 1994, quando os CEFETs foram concebidos sob a Lei nº 8.948/94, como unidades-modelo da Rede Federal de Ensino 
        Profissional, Científico e Tecnológico (RFEPCT), absorvendo, assim, as atividades das Escolas Técnicas Federais e das 
        Escolas Agrotécnicas Federais (EAFs), como dispõe o seu art. 3º:
      </Paragraph>

      <Quote>
        As atuais escolas técnicas federais, criadas pela lei nº 3552 de 16 de fevereiro 1959 e pela lei nº 8670, de 30 de junho 
        1983, fica transformada em Centros Federais de Educação Tecnológica, no termos da Lei nº 6545, de 30 de junha de 1978, 
        auterada pela Lei nº 8711, de 28 de setembro de 1993, e do decreto n 87310, de 21 de junho de 1982 (BRASIL, 1994).
      </Quote>

      <Paragraph>
        O objetivo era a inserção do Brasil na revolução técnica, científica e informacional criada no pós-segunda guerra. 
        Na visão de Souza (2017, p. 45):
      </Paragraph>
      <Quote>
        Sem negar as questões adversas, o ideário de desenvolvimento econômico com vistas à expansão, e o crescimento do 
        acesso ao Ensino Superior, impulsionou potencialmente a Rede de Educação Profissional e Tecnológica para a transformação 
        das Escolas Técnicas em CEFETs, que, a partir de então, se transformaram em instituições pluricurriculares podendo 
        legalmente ofertar além do curso técnico, cursos de graduação, licenciaturas, pós-graduação lato sensu e a partir de 2012, 
        a pósgraduação stricto sensu, contribuindo assim com o desenvolvimento local e regional.
      </Quote>

      <Paragraph>
        A ideia de desenvolvimento econômico e de expansão do acesso ao ensino superior facilitou a inserção do modelo neoliberal, 
        com a reestruturação produtiva e uma profusão de instituições privadas atuando no ensino superior. Além disso, em 1997, o 
        governo brasileiro assinou convênio com o Banco Interamericano de Desenvolvimento (BID) para a implantação do Programa de 
        Expansão da Educação Profissional (Proep), ficando sujeito aos ditames dessa organização quanto às ações que deveriam ser 
        desenvolvidas nas instituições de ensino brasileiras, a fim de conseguir financiamentos internacionais. De acordo com o 
        PDI (2020-2024) do Instituto Federal da Paraíba:
      </Paragraph>

      <Quote>
        Em 1996, a nova LDB, Lei nº 9.394, é aprovada; no ano seguinte, o Decreto nº 2.208 regulamenta os artigos dessa Lei que 
        tratam especificamente da educação profissional. A chamada “Reforma da Educação Profissional” é implantada dentro do 
        ideário de Estado Mínimo, com fortes reflexos nas escolas federais de educação profissional do país. As mudanças estabelecidas 
        pela nova legislação são profundas e cortam pela raiz o movimento de redirecionamento desenhado pelas instituições federais 
        (IFPB, 2024, p. 20).
      </Quote>

      <Paragraph>
        De fato, a implantação dos CEFETs ocorreu efetivamente no ano de 1999, e a Paraíba aderiu a essa transformação com o Decreto de 
        22 de março de 1999, do então presidente Fernando Henrique Cardoso, implementando o Centro Federal de Educação Tecnológica da 
        Paraíba (CEFET/PB). Consequentemente, a UNED-CZ também foi incluída nesse processo de transformação.
      </Paragraph>

      {/* Décima segunda imagem */}
      <div className={styles.imageCenter}>
        <ImageDescription
          pictureURL={Figura12}
          width="100%"
          description="Solenidade de mudança da UNED para CEFET."
          source="Arquivo institucional do IFPB Campus Cajazeiras."
          numPicture={12}
        />
      </div>

      <Paragraph>
        A solenidade de transformação ocorreu no dia 27 de maio de 1999, como mostra a Figura 12. Essa nomenclatura (CEFET/Cajazeiras) 
        durou cerca de dez anos, de março de 1999 a dezembro de 2008.
      </Paragraph>

      <Paragraph>
        Não foi apenas uma mudança de nomenclatura, como externam Cruz, Alves e Gonçalves (2024, p. 367):
      </Paragraph>
      <Quote>
        Em 1999, período em que o Prof. João Batista esteve à frente da UnED-CZ, houve a mudança de Escola Técnica Federal da Paraíba 
        para Centro Federal de Educação Tecnológica da Paraíba (CEFET/PB), mudança que ampliou significativamente as atividades 
        educacionais e acadêmicas da instituição, permitindo, assim, uma oferta mais ampla de programas educacionais para atender às 
        necessidades da sociedade, nos vários níveis da educação.
      </Quote>

      <Paragraph>
        No seu primeiro ano de governo, o então presidente Luiz Inácio Lula da Silva passou a editar novas medidas para a Educação 
        Profissional e Tecnológica. Ocorreu a substituição do Decreto nº 2.208/1997 pelo Decreto nº 5.154/2004, eliminando as amarras 
        estabelecidas pelo decreto anterior, que continha uma série de restrições à organização curricular, pedagógica e à oferta de 
        cursos técnicos.
      </Paragraph>

      <Paragraph>
        A política do governo federal já aponta para uma nova direção: a direção da responsabilidade social, de uma educação mais humana, 
        politécnica e omnilateral. Sai-se da visão de que o fator econômico era o que movia a EPT, para uma perspectiva centrada na 
        qualidade social.
      </Paragraph>

      <Paragraph>
        Em 1º de outubro de 2004, mediante o Decreto nº 5.224/2004, que dispõe sobre a organização dos Centros Federais de Educação Tecnológica, 
        o governo federal deliberou que “constituem-se em autarquias federais, vinculadas ao Ministério da Educação, detentoras de autonomia 
        administrativa, patrimonial, financeira, didático-pedagógica e disciplinar” (Brasil, 2004).
      </Paragraph>

      <Paragraph>
        Os CEFETs são instituições que oferecem ensino em diferentes níveis e modalidades. Além disso, têm a finalidade de formar e qualificar 
        profissionais para vários setores da economia, realizar pesquisas e promover o desenvolvimento tecnológico, preferencialmente local e regional.
      </Paragraph>

      <Paragraph>
        Até então, as Instituições Federais de Educação Profissional e Tecnológica não traziam esse eixo como prioritário em sua estrutura. Entretanto, 
        o então presidente passa a enxergar a potencialidade estratégica dessas instituições, bem como suas capacidades e qualidades nos serviços prestados, 
        e inicia um diálogo intenso com essa rede de formação, com o objetivo de mudar o foco até então adotado pela EPT.
      </Paragraph>

      <Quote>
        Nesse contexto, toma-se a decisão de ampliar o número de escolas federais de educação profissional e tecnológica, dando início a um processo de crescimento 
        capaz de gerar reflexos mais amplos na educação brasileira. A primeira fase dessa expansão, iniciada em 2006, tem como objetivo implantar escolas federais 
        de formação profissional e tecnológica em estados ainda desprovidos dessas instituições, além de outras, preferencialmente em periferias de metrópoles e em 
        municípios interioranos distantes de centros urbanos, promovendo uma articulação entre seus cursos e as potencialidades locais de geração de trabalho (IFPB, 2024, p. 21).
      </Quote>

      <Paragraph>
        Essas instituições foram implantadas em regiões até então desprovidas de uma educação voltada para o desenvolvimento local e regional, comprometida com a melhoria do 
        padrão de vida da população das áreas desassistidas pela Rede Federal de Educação Profissional e Tecnológica.
      </Paragraph>

      <Paragraph>
        A implantação dos cursos oferecidos nos novos campi foi baseada nas características de suas respectivas regiões.
      </Paragraph>

      <Paragraph>
        O servidor José de Arimatéia Tavares, na obra de Cruz (2021), faz o seguinte relato sobre o período do CEFET no Campus Cajazeiras:
      </Paragraph>

      <Quote>
        Ao longo dos anos, já no então Centro Federal de Educação Tecnológica da Paraíba (CEFET/PB), foram implantados novos cursos, a exemplo dos cursos técnicos subsequentes ao 
        ensino médio: Edificações e Eletromecânica, em funcionamento até os dias atuais. Posteriormente, foi instituído o ensino médio, que funcionou até 2007, quando surgiram os 
        cursos técnicos integrados ao ensino médio: Edificações, Eletromecânica e Manutenção e Suporte em Informática, este substituído pelo curso técnico em Informática. No ano 
        de 2005, foi implantado o primeiro curso superior do Campus Cajazeiras, de Tecnologia em Automação Industrial, da área de Indústria, o primeiro também do Alto Sertão 
        paraibano. Em 2006, a Instituição passou a oferecer o curso superior de Análise e Desenvolvimento de Sistemas, da área de Informática, que vem se destacando no ranking nacional 
        do Enade (Cruz, 2021, p. 152).
      </Quote>

      <Paragraph>
        Com a implantação dos CEFETs, houve uma elevação no nível das Escolas Técnicas Federais, que passaram à categoria de instituições de educação superior. A finalidade era verticalizar 
        o ensino, interligando o ensino técnico ao superior. Na prática, atendia-se a uma política governamental que objetivava fornecer mão de obra qualificada para o desenvolvimento e a 
        modernização das indústrias.
      </Paragraph>

      <Paragraph>
        Tomando como base o que é apresentado por Cruz, Alves e Gonçalves (2024), no período do CEFET, esteve à frente da direção-geral do campus o professor João Batista de Oliveira Silva, 
        que já ocupava o cargo desde 1995, permanecendo no CEFET até o ano de 2001. Até esse período, os diretores das unidades eram indicados pelos diretores-gerais, mas, diante da pressão 
        de parte dos servidores e do sindicato, a Portaria nº 45, de 19 de fevereiro de 2001, designou o professor Dimas Andriola Pereira como diretor interino, com a finalidade de promover 
        a eleição direta.
      </Paragraph>

      <Paragraph>
        No dia 6 de junho de 2001, ocorreu a primeira eleição direta para a direção-geral do IFPB Campus Cajazeiras, na qual o professor Roscellino Bezerra de Mello Júnior saiu vencedor com 44,93% 
        dos votos. Ele foi nomeado pela Portaria nº 177, de 27 de junho de 2001, permanecendo no cargo por apenas um ano, pois se afastou em 1º de junho de 2002.
      </Paragraph>

      <Paragraph>
        Com o afastamento do professor Roscellino, assumiu interinamente a direção do CEFET-CZ a servidora Maria de Fátima Vieira Cartaxo, nomeada pela Portaria nº 137, de 1º de julho de 2002. 
        O novo pleito ocorreu em 18 de junho de 2003, quando a então diretora, Fátima Cartaxo, foi eleita para um mandato de quatro anos.
      </Paragraph>

      <Paragraph>
        Em 2006, houve eleição para diretor-geral do CEFET-PB, tendo saído vitorioso o professor João Batista de Oliveira Silva. Este dispensou Fátima Cartaxo e designou o professor Dimas 
        Andriola Pereira para o cargo, mediante a Portaria nº 198, de 6 de julho de 2006.
      </Paragraph>

      <Paragraph>
        No ano seguinte, deu-se nova consulta para a escolha do diretor, sendo eleito o professor Roscellino Bezerra de Mello Júnior, com nomeação publicada na Portaria nº 335, de 11 de julho de 2007.
      </Paragraph>

      <h3>Instituto Federal Da Paraíba (IFPB)</h3>

      <Paragraph>
        No ano de 2008, por meio da Lei nº 11.892/2008, o então presidente Luiz Inácio Lula da Silva criou os Institutos Federais com o objetivo de reorganizar o sistema federal de educação técnica 
        e tecnológica. Os institutos absorveram os CEFETs, as escolas técnicas federais vinculadas às universidades federais e as escolas agrotécnicas federais.
      </Paragraph>

      <Paragraph>
        Pacheco (2011, p. 6) discorre assim sobre a criação dos IFs:
      </Paragraph>

      <Quote>
        Na educação profissional e tecnológica (EPT), a instalação, entre 2003 e 2010, de 214 novas escolas vem ampliar a Rede Federal na perspectiva de colaboração com os demais sistemas de ensino 
        para fortalecimento da oferta de EPT e, ao mesmo tempo, encaminha-se a criação dos Institutos Federais de Educação, Ciência e Tecnologia. 
      </Quote>

      <Paragraph>
        A criação dos Institutos Federais foi um divisor de águas na Educação Profissional e Tecnológica, pois a expansão dessa modalidade de ensino alcançou o interior do Brasil, onde foram 
        construídos centenas de campi, oferecendo uma educação emancipadora e humana para aqueles que não tinham a oportunidade de se deslocar para os grandes centros para estudar.
      </Paragraph>

      <Paragraph>
        No entanto, o principal benefício dessa expansão foi proporcionar uma EPT baseada nas especificidades regionais, ou seja, o aluno do interior passou a estudar em sua própria 
        localidade, sem precisar se deslocar para a capital e enfrentar uma realidade de vida adversa à sua.
      </Paragraph>

      <Paragraph>
        Nas palavras de Pacheco (2015), esses institutos são espaços privilegiados de aprendizagem, inovação e transferência de tecnologias. Além de gerar mudanças na qualidade de vida 
        de milhares de brasileiros, têm a capacidade de contribuir para o desenvolvimento local e regional.O mesmo autor defende que os IFs:
      </Paragraph>

      <Quote>
        Antes de formar o profissional, trata-se de formar o cidadão, capaz de compreender o processo produtivo e seu papel dentro dele, incluindo as relações sociais estabelecidas a 
        partir daí. Essas relações ocorrem dentro de um determinado processo histórico onde o trabalho em busca da satisfação das necessidades materiais e subjetivas possibilita ao 
        ser humano construir novos conhecimentos (Pacheco, 2015, p. 29).
      </Quote>

      <Paragraph>
        As concepções de sociedade e de ser humano praticadas por esses institutos são totalmente opostas às apresentadas pela globalização econômica. O objetivo é contribuir para 
        a formação humana do sujeito, um sujeito emancipado, capaz de se envolver politicamente, a fim de promover transformações que possibilitem uma sociedade justa.
      </Paragraph>

      <Paragraph>
        Ciavatta (2005) acredita que:
      </Paragraph>

      <Quote>
        Como formação humana, o que se busca é garantir ao adolescente, ao jovem e ao adulto trabalhador o direito a uma formação completa para a leitura do mundo e para a atuação 
        como cidadão pertencente a um país, integrado dignamente à sua sociedade política (Ciavatta, 2005, p. 85).
      </Quote>

      <Paragraph>
        Formar um profissional não se limita a ensinar uma profissão ao sujeito, mas implica uma formação pautada na essência da transformação. Trata-se de permitir que o aluno 
        saia preparado tanto para o mundo do trabalho quanto para não ser passivo diante das injustiças, tornando-se um ser capaz de contribuir para a superação da desigualdade 
        que o mundo impõe.
      </Paragraph>

      <Paragraph>
        Na visão de Freire (2017), os oprimidos precisam reconhecer o opressor e se engajar na luta organizada por sua libertação, passando a acreditar em si mesmos e superando 
        a convivência com o opressor.
      </Paragraph>

      <Paragraph>
        Dentro dessa conjuntura, Freire (1996, p. 13) acredita que:
      </Paragraph>

      <Quote>
        Embora diferentes entre si, quem forma se forma e reforma ao formar e quem é formado forma-se e forma ao ser formado. É neste sentido que ensinar não é transferir conhecimentos, 
        conteúdos nem formar é ação pela qual um sujeito criador dá forma, estilo ou alma a um corpo indeciso e acomodado. Não há docência sem discência, as duas se explicam e seus 
        sujeitos, apesar das diferenças que os conotam, não se reduzem à condição de objeto, um do outro.
      </Quote>

      <Paragraph>
        A formação é de mão dupla: o aluno aprende com o professor, e este aprende com aquele. Mas, para que isso aconteça, é necessário que o professor compreenda que as experiências 
        trazidas pelo discente, somadas aos conteúdos por ele ministrados, adquirem sentido e significado tanto para o aluno quanto para o próprio professor.
      </Paragraph>

      <Paragraph>
        A respeito da EPT Villar (2023, p. 18) faz a seguinte afirmação:
      </Paragraph>

      <Quote>
        Em se tratando da Educação Profissional Tecnológica, a formação humana integral também passa pela solidariedade social e por uma consciência de interrupção de um contexto, de 
        uma marca excludente, que atinge a muitos no país, os pobres principalmente, que tem seu direito à educação negado, surrupiado ou ofertado com o intuito de atender a um 
        mercado. A formação humana integral pode colaborar para mudanças deste cenário.
      </Quote>

      <Paragraph>
        A educação humana integral pode romper com esse cenário excludente, como acredita Pacheco (2012), ao afirmar que essa forma de educação está relacionada ao rompimento do 
        dualismo imposto ao ser humano — aquele que separa o modo de fazer do conhecimento —, quando, na verdade, ambos se completam.
      </Paragraph>

      <Paragraph>
        O IFPB Campus Cajazeiras oferece, aos discentes que ingressam em seus cursos, um ensino compatível com os principais conceitos que norteiam as discussões sobre Educação 
        Profissional e Tecnológica no curso de mestrado do ProfEPT, tais como formação omnilateral, práxis, politecnia e emancipação do sujeito.	
      </Paragraph>

      <Paragraph>
        Desde que se tornou Instituto Federal da Paraíba, o Campus Cajazeiras teve os seguintes diretores-gerais: Valnir Vasconcelos Lira (14/07/2010 a 20/08/2014), Lucrécia 
        Teresa Gonçalves Petrucci (21/08/2014 a 21/10/2022) e, atualmente, o professor Abinadabe Silva Andrade exerce seu primeiro mandato, iniciado em 21 de outubro de 2022.
      </Paragraph>

      <Paragraph>
        Atualmente, o Instituto em Cajazeiras dispõe dos cursos técnicos integrados diurnos em Edificações, Eletromecânica e Informática. Os cursos subsequentes noturnos são: 
        Eletromecânica, Edificações e Meio Ambiente (PROEJA).
      </Paragraph>

      <Paragraph>
        A graduação do campus é composta pelos cursos de Análise e Desenvolvimento de Sistemas, Engenharia Civil, Engenharia de Controle e Automação e Licenciatura em Matemática. 
        Já a pós-graduação oferece a Especialização em Matemática.
      </Paragraph>
    </div>
  );
}

