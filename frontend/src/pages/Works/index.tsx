import { BookCard } from "../../components/BookCard/BookCard";
import style from "./Works.module.css";
import Title from "../../components/Title/index";
import { useEffect } from "react";

export default function Works() {
  useEffect(()=>{
    document.title = "Trabalhos"
  }, []);
  return (
    <div className={style.container}>
      <div className={style.headerText}>
        <center><Title content="Obras" /></center>
        <p>Veja todos os livros publicados a respeito da instituição <a style={{textDecoration: "none"}} target="_blank" href="https://editora.ifpb.edu.br/ifpb/catalog/series/memorias">aqui</a>.
          </p>
      </div>

      <BookCard
        image="https://books.google.com.br/books/publisher/content?id=DbLIEAAAQBAJ&hl=pt-BR&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U28VKhKTU9gYQmeHP0vEtbombHcJA&w=1280"
        tags={["Educação", "Arte", "Cultura"]}
        title="Uma história de tantos nós: memórias dos 25 anos do campus Cajazeiras do IFPB"
        author="Ana Paula da Cruz"
        description="O Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, Campus Cajazeiras, é fruto das aspirações da sociedade dos sertões do Rio Piranhas por conhecimento humano, profissionalizante, científico e tecnológico. A realização desse desejo iniciou-se por meio do Projeto de Lei n° 3305-A de 1984, implementado pelo então deputado federal Edme Tavares. Em 04 de dezembro de 1994, as portas se abrem: aconteceu a inauguração da Unidade de Ensino Descentralizada, sediada na cidade de Cajazeiras (UNED Cajazeiras), parte da Escola Técnica Federal da Paraíba. O presente trabalho traz à tona múltiplos olhares e rememorações de experiências de vida conectados aos seus 25 anos de história."
        inverted={false}
        link="https://editora.ifpb.edu.br/ifpb/catalog/series/memorias"
      />

      <BookCard
        image="https://play.google.com/books/publisher/content/images/frontcover/k4o0EQAAQBAJ?fife=w240-h345"
        tags={["Educação","Ciências Humanas"]}
        title="Encontros de memórias: trajetórias do campus Cajazeiras em seus 30 anos"
        author="Ana Paula da Cruz"
        description="Ao completar 30 anos de atividades no campo da educação, ciência e tecnologia, o Campus Cajazeiras celebra um conjunto de experiências humanas e práticas de formação profissional que contribuíram diretamente para a transformação da vida de muitas pessoas. Jovens e adultos encontram seus espaços de  atuação profissional na sociedade a partir dos conhecimentos adquiridos e das conquistas alcançadas por este Campus."
        inverted={false}
        link="https://editora.ifpb.edu.br/ifpb/catalog/series/memorias"
      />
    </div>
  );
}
