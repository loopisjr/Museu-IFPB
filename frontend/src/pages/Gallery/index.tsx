import { ImageGallery } from "../../components/ImageGallery/ImageGallery";
import Title from "../../components/Title";
import style from "./gallery.module.css"
type ImageData = {
  src: string;
  alt: string;
};

export default function Gallery() {
  const images: ImageData[][] = [
    [
      {src: "/gallery/IMG_2952.jpg", alt: "Imagem 1"},
      {src: "/gallery/IMG_2953.jpg", alt: "Imagem 2"},
      {src: "/gallery/IMG_2956.jpg", alt: "Imagem 3"},
    ],
    [
      {src: "/gallery/IMG_2959.jpg", alt: "Imagem 4"},
      {src: "/gallery/IMG_2960.jpg", alt: "Imagem 5"},
      {src: "/gallery/IMG_2964.jpg", alt: "Imagem 6"},
    ],
    [
      {src: "/gallery/IMG_2982.jpg", alt: "Imagem 7"},
      {src: "/gallery/IMG_2994.jpg", alt: "Imagem 8"},
      {src: "/gallery/IMG_3005.jpg", alt: "Imagem 9"},
    ]
  ]
  return (
    <div className={`${style.container} container`} >
      <Title content="Galeria" margin="0px"/>
      <p className={style.text}>Imagens atuais e históricas do IFPB, campus Cajazeiras.</p>
      <ImageGallery images={images}/>
    </div>
  )
}

