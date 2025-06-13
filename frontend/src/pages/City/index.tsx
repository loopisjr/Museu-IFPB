import style from "./city.module.css"

import BannerCajazeiras from "../../components/BannerCajazeiras"
import ImageDescription from "../../components/ImageDescription";
import Reference from "../../components/Reference";
import Quote from "../../components/Quote/Quote";
import Title from "../../components/Title";

const textoBanner = `
Cajazeiras é uma cidade situada no interior do estado da Paraíba, localizada na 
mesorregião do Sertão Paraibano e distante 468 km da capital, João Pessoa. Como 
afirma Souza (1981), no sítio onde se localiza a referida cidade, existiam 
numerosas árvores frutíferas da espécie do cajá (Spondias lutea), motivo pelo 
qual a localidade passou a se chamar Cajazeiras.
`;

import Paragraph from "../../components/Paragraph/Paragraph";

export default function City() {
  return (
    <div>
        <BannerCajazeiras title="Cajazeiras" subtitle="A cidade que ensinou a Paraíba a ler"
        description={textoBanner} pictureURL="/images/banner_cajazeiras.png"
        horizontal_padding="200px"/>

        <div className={style.conteudo}>
            <Title content="Contextualização" margin="60px 0 40px"></Title>
            
            <Paragraph>
                <p>
                    Essas terras foram, por meio de uma sesmaria, doadas a Francisco Gomes Brito e 
                José Rodrigues da Fonseca pelo então governador da Capitania da Paraíba, Luiz 
                Antônio Lemos Brito. No dia 7 de fevereiro de 1767, José Jerônimo de Melo, 
                outro governador da capitania, doou parte dessas terras ao pernambucano Luiz 
                Gomes de Albuquerque, que era um dos colonizadores do vale do Rio do Peixe, onde 
                foi fundada a Fazenda Cajazeiras. Esta foi doada por Luiz Gomes de Albuquerque a 
                uma de suas filhas, Ana Francisca de Albuquerque, após o seu casamento com Vital 
                de Souza Rolim.
                </p>
                <p>
                    No início do século XIX, o casal construiu a casa-grande da fazenda e, ao lado 
                direito, um açude, com a finalidade de armazenar água para abastecer a localidade.
                </p>
            </Paragraph>

            <div className={style.centralizar}>
                <ImageDescription pictureURL="/images/city1.png" description="Casa grande da fazenda Cajazeiras" width="auto"/>
            </div>
            

            <Quote>
                A primeira casa de Cajazeiras (fazenda), foi construída no início do século XIX, no local onde é o atual 
                “Cajazeiras Tênis Clube”. Pode-se dizer: alí nasceu Cajazeiras. A pedra fundamental de sua edificação fôra
                 a casa grande da fazenda, residência de VITAL DE SOUZA ROLIM e ANA FRANCISCA DE ALBUQUERQUE ... Ao lado 
                 direito da fazenda, VITAL DE SOUZA ROLIM construiu um açude para armazenar água para abastecer os 
                 moradores da localidade e serventia para a criação do gado e de animais diversos pertencentes aos 
                 proprietários e fazendeiros nas circunvizinhanças (Souza, 1981, p. 15).</Quote>

            <Paragraph>
                <p>                    
                O citado reservatório foi fundamental para o desenvolvimento daquela localidade, visto que teve um papel 
                essencial na atração de moradores para a região.
                </p>

                <p>
                Na outra margem do Riacho das Cajazeiras, em frente à casa principal da fazenda, Ana Francisca de Albuquerque 
                (Mãe Aninha, como era conhecida), juntamente com seus escravos, construiu uma capelinha em homenagem a Nossa 
                Senhora da Piedade, de quem era devota, que serviu de casa de oração para a comunidade. Esse ambiente 
                religioso corresponde hoje à Igreja Matriz de Nossa Senhora de Fátima.
                </p>
            </Paragraph>

            <div className={style.centralizar}>
                <ImageDescription pictureURL="/images/city2.png" description="Igreja matriz de Nossa Senhora de Fátima" width="auto"/>
            </div>

            <Paragraph>
                Antes de se tornar Igreja Matriz de Nossa Senhora de Fátima, neste monumento religioso funcionou, de 1915 a 
                1957, a Catedral Nossa Senhora da Piedade. No ano de 1937, é lançada a pedra fundamental da construção da 
                nova catedral. Diversas campanhas solidárias foram feitas para arrecadar recursos para a construção e, no 
                ano de 1957, foi inaugurada, mesmo sem estar totalmente pronta.
            </Paragraph>

            <div className={style.centralizar}>
                <ImageDescription pictureURL="/images/city3.png" description="Catedral Nossa Senhora da Piedade - Cajazeiras - PB" width="auto"/>
            </div>

            <Paragraph>
                <p>
                O imponente monumento religioso é o principal cartão-postal da cidade. Sua torre tem 52 metros de altura 
                e, com isso, pode ser apreciada de todos os quatro cantos da cidade.
                </p>
                <p>
                Da união matrimonial de Vital de Souza Rolim e Ana Francisca de Albuquerque, nasceu, no ano de 1800, o 
                filho mais ilustre desta cidade: Inácio de Sousa Rolim, o padre Rolim, como é popularmente conhecido.
                </p>
            </Paragraph>

            <div className={style.centralizar}>
                <ImageDescription pictureURL="/images/city4.png" description="Padre Inácio de Souza Rolim" width="400px"/>
            </div>

            <Paragraph>
                <p>
                Inácio de Souza Rolim formou-se padre em 1825, no Seminário de Olinda, Pernambuco. Em 1829, fundou a 
                escolinha da Serraria, localizada em um lugar de onde a população retirava madeira para construir suas
                 casas. Quatro anos depois, sua escola começou a atrair, cada vez mais, estudantes da localidade e de 
                 outras regiões, em busca dos ensinamentos do religioso.
                </p>
                <p>
                Com o aumento da procura, a escolinha da Serraria já não comportava mais a quantidade de estudantes. 
                Em 1836, o sacerdote transferiu a escola para uma casa próxima à capela da Fazenda Cajazeiras. No entanto,
                 mais uma vez, a instalação não foi suficiente para atender à grande demanda. Assim, em 1843, ele fundou
                  um colégio de salesianos, onde hoje funciona o Colégio Nossa Senhora de Lourdes.
                </p>
            </Paragraph>

            <div className={style.centralizar}>
                <ImageDescription pictureURL="/images/city5.png" description="Colégio Nossa Senhora de Lourdes" width="400px"/>
            </div>

            <Paragraph>
                No livro “Vida e obra do padre Rolim”, o autor afirma que: 
                <Quote>
                    O número de alunos que procuravam a escola da Serraria deu ao Padre Mestre a preocupação de 
                    instalá-la em prédio mais adequado à sua finalidade. Em 1836 transferiu a sua escola para uma casa 
                    construída nas proximidades do local em que ele e Mãe Aninha edificavam a capela que dedicaram a Nossa 
                    Senhora da Piedade. Construídos ao mesmo tempo, tanto a capela como a casa do colégio, iriam exercer 
                    decisiva influência no desenvolvimento de Cajazeiras (Leitão, 2000, p. 52).
                </Quote>

                <p>
                Essa instituição atraiu diversos estudantes que se tornaram figuras ilustres na região. O mais famoso e 
                reverenciado entre eles é Cícero Romão Batista, o Padre Cícero, de Juazeiro do Norte (CE). As construções 
                do açude, da capela e do colégio foram fundamentais para o povoamento da localidade. Como afirma Souza 
                (1981, p. 16): “Igreja, Colégio e açude formaram as três colunas básicas, que serviram de tripé, sobre o qual
                 se levantou e se firmou, como núcleo social, econômico, político, religioso e cultural, a nossa querida e 
                 progressista cidade de Cajazeiras”.
                </p>
                
                <p>
                Em torno do colégio foram sendo formadas diversas residências estudantis, que mais tarde dariam origem à 
                "cidade que ensinou a Paraíba a ler", como Cajazeiras é conhecida. Alguns atribuem essa expressão à origem 
                histórica da cidade, mas há quem defenda que ela tenha surgido em 1947, durante uma disputa eleitoral, quando 
                o político Alcides Carneiro teria proferido a famosa frase, como mencionam Cruz, Alves e Gonçalves:
                </p>

                <Quote>
                    A experiência educacional atrelada às questões políticas que permitiram a Cajazeiras emancipar-se da
                     cidade de Sousa tornaram o padre Rolim e sua escola como partes da identidade do município. Alega-se
                      que, em um momento de disputa eleitoral, em 1947, o político Alcides Carneiro teria proferido a 
                      frase “Cajazeiras é a cidade que ensinou a Paraíba a ler” (Cruz; Alves; Gonçalves, 2024, p. 16).
                </Quote>

                <p>
                    O Colégio dos Salesianos e a Capela de Nossa Senhora da Piedade passaram a atrair cada vez mais 
                    habitantes para a Fazenda Cajazeiras.
                </p>

                <Quote>
                    Em 29 de agosto de 1859, através da lei provincial n° 5, Cajazeiras torna-se um distrito, 
                    pertencente ao município de Sousa. Em 23 de novembro de 1863, a lei provincial nº 92, sancionada
                     pelo governador Francisco de Araújo Lima, eleva o distrito à categoria de vila e o desmembra de 
                     Sousa, tornando-se um novo município da Paraíba (na época província da Paraíba do Norte). Em 20 de 
                     junho de 1864, ocorreu a instalação do governo municipal, que foi assumido pelo vereador e presidente 
                     da Câmara, o sacerdote e vigário paroquial José Tomaz de Albuquerque. Como vila, o município passou 
                     um dos momentos mais agitados de toda a sua história, de forma política com o desentendimento entre
                      políticos conservadores e liberais, e com a ocorrência de alguns episódios, como o assassinato do 
                      tabelião Leandro Soares. Finalmente, em 10 de julho de 1876, através da lei provincial nº 616, a 
                      vila é elevada à condição de cidade (Cajazeiras, [2020?]).
                </Quote>

                <p>
                    Vale ressaltar que a maioria das obras ou das fontes de informação apontam o padre Rolim como o 
                    fundador da cidade de Cajazeiras, mas alguns historiadores afirmam que foram os seus pais, Vital de 
                    Souza Rolim e Ana Francisca de Albuquerque, quando fizeram moradia na Fazenda Cajazeiras.
                </p>

                <p>
                    Atualmente, a cidade de Cajazeiras tem 161 anos de emancipação política. Essa data festiva é 
                    comemorada no dia 22 de agosto, aniversário do Padre Rolim. Segundo o Censo de 2022, do Instituto 
                    Brasileiro de Geografia e Estatística (IBGE), a cidade conta com uma população de 63.239 habitantes, 
                    distribuídos em uma área de 562,703 km². A cidade é destaque regional na educação, pois tem um campus 
                    da Universidade Federal de Campina Grande (UFCG), um campus do Instituto Federal da Paraíba (IFPB), 
                    uma Escola Cidadã Integral Técnica (ECIT), um centro universitário, duas faculdades particulares, além 
                    de faculdades que oferecem Educação a Distância (EAD), com polo na cidade.
                </p>
            </Paragraph>

            <Reference>
                <li><strong>CAJAZEIRAS. Prefeitura Municipal. Dados do município – origem. [Cajazeiras]: [s.n.], [2020?]. Disponível em: https://cajazeiras.pb.gov.br/omunicipio.php. Acesso em: 16 dez. 2024.</strong></li>
                <li><strong>CRUZ, Ana Paula da; ALVES, Ildegarde Elouise; GONÇALVES, Hegildo Holanda. Encontros de memórias: trajetórias do Campus Cajazeiras em seus 30 anos. João Pessoa: Editora IFPB, 2024.</strong></li>
                <li><strong>INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. Censo brasileiro de 2022: Cajazeiras. Cajazeiras: IBGE, 2024. Disponível em: https://cidades.ibge.gov.br/brasil/pb/cajazeiras/panorama. Acesso em: 16 dez. 2024.</strong></li>
                <li><strong>LEITÃO, Deusdedit. Vida e Obra do Padre Rolim: Edição comemorativa aos 200 anos de nascimento do Padre Inácio de Sousa Rolim. Brasília: Senado Federal, 2000.</strong></li>
                <li><strong>SOUZA, Antônio José de. CAJAZEIRAS: Nas Crônicas de um Mestre - Escola. João Pessoa: Editora Universitária, 1981.</strong></li>
            </Reference>
        </div>
    </div>
  )
}

