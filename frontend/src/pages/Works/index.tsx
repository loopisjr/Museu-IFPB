import { BookCard } from "../../components/BookCard/BookCard";
import style from "./Works.module.css";
import Title from "../../components/Title/index";

export default function Works() {
  return (
    <div className={style.container}>
      <div className={style.headerText}>
        <center><Title content="Obras" /></center>
        <p>Livros publicados a respeito da instituição</p>
      </div>

      <BookCard
        image="https://books.google.com.br/books/publisher/content?id=DbLIEAAAQBAJ&hl=pt-BR&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U28VKhKTU9gYQmeHP0vEtbombHcJA&w=1280"
        tags={["Educação", "Arte", "Cultura"]}
        title="Uma história de tantos nós: memórias dos 25 anos do campus Cajazeiras do IFPB"
        author="Ana Paula da Cruz"
        description="O Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, Campus Cajazeiras, é fruto das aspirações da sociedade dos sertões do Rio Piranhas por conhecimento humano, profissionalizante, científico e tecnológico. A realização desse desejo iniciou-se por meio do Projeto de Lei n° 3305-A de 1984, implementado pelo então deputado federal Edme Tavares. Em 04 de dezembro de 1994, as portas se abrem: aconteceu a inauguração da Unidade de Ensino Descentralizada, sediada na cidade de Cajazeiras (UNED Cajazeiras), parte da Escola Técnica Federal da Paraíba. O presente trabalho traz à tona múltiplos olhares e rememorações de experiências de vida conectados aos seus 25 anos de história."
        inverted={false}
        link="http://editora.ifpb.edu.br/ifpb/catalog/book/400"
      />
    </div>
  );
}
