import { ImageGallery } from "../../components/ImageGallery/ImageGallery";
import Title from "../../components/Title";
import style from "./gallery.module.css"
type ImageData = {
  src: string;
  alt: string;
};

//Funciona melhor quando no maximo uma linha tem quantidade de colunas diferente das demais
function rotateMatrix(images: ImageData[][]){
  let imagesRotated: ImageData[][] = [];

  for(let i=0; i<images.length; i++){
    for(let j=0; j<images[i].length; j++){
      if(imagesRotated.length <= j){
        imagesRotated.push([images[i][j]]);
      }
      else{
        imagesRotated[j].push(images[i][j]);
      }
    }
  }

  return imagesRotated;
}

export default function Gallery() {
  const images: ImageData[][] = [
    [
      {src: "images/gallery/IMG_2952.jpg", alt: "Imagem 1"},
      {src: "images/gallery/IMG_2953.jpg", alt: "Imagem 2"},
      {src: "images/gallery/IMG_2956.jpg", alt: "Imagem 3"},
    ],
    [
      {src: "images/gallery/IMG_2959.jpg", alt: "Imagem 4"},
      {src: "images/gallery/IMG_2960.jpg", alt: "Imagem 5"},
      {src: "images/gallery/IMG_2964.jpg", alt: "Imagem 6"},
    ],
    [
      {src: "images/gallery/IMG_2994.jpg", alt: "Imagem 7"},
      {src: "images/gallery/IMG_3005.jpg", alt: "Imagem 8"},
      {src: "images/gallery/IMG_2957.jpg", alt: "Imagem 9"}
    ],
    [
      {src: "images/gallery/IMG_2982.jpg", alt: "Imagem 10"},
      {src: "images/gallery/IMG_2946.jpg", alt: "Imagem 11"},
      {src: "images/gallery/IMG_2948.jpg", alt: "Imagem 12"},
    ],
    [
      {src: "images/gallery/IMG_2951.jpg", alt: "Imagem 13"},
      {src: "images/gallery/IMG_2949.jpg", alt: "Imagem 14"},
      {src: "images/gallery/IMG_2969.jpg", alt: "Imagem 15"},
    ],
    [
      {src: "images/gallery/IMG_2971.jpg", alt: "Imagem 16"},
      {src: "images/gallery/IMG_2976.jpg", alt: "Imagem 17"},
      {src: "images/gallery/IMG_2985.jpg", alt: "Imagem 18"},
    ],
    [
      {src: "images/gallery/IMG_2998.jpg", alt: "Imagem 19"},
      {src: "images/gallery/IMG_3062.jpg", alt: "Imagem 20"},
      {src: "images/gallery/IMG_3054.jpg", alt: "Imagem 21"},
    ],
    [
      {src: '', alt:''},
      {src: "images/gallery/IMG_3001.jpg", alt: "Imagem 22"},      
      {src: "images/gallery/IMG_3077.jpg", alt: "Imagem 23"},
    ]
  ]

  const rotatedImageMatrix: ImageData[][] = rotateMatrix(images);

  return (
    <div className={`${style.container} container`} >
      <Title content="Galeria" margin="0px"/>
      <p className={style.text}>Imagens atuais e históricas do IFPB, campus Cajazeiras.</p>
      <ImageGallery images={rotatedImageMatrix}/>
    </div>
  )
}