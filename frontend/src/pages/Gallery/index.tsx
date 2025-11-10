import { ImageGallery } from "../../components/ImageGallery/ImageGallery";
import Title from "../../components/Title";
import style from "./gallery.module.css";
import { useEffect } from "react";

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
  useEffect(()=>{
    document.title = "Galeria"
  }, []);
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
    ],
    [
      {src: "images/gallery/Figura24.png", alt: "Imagem 24"},      
      {src: "images/gallery/Figura25.png", alt: "Imagem 25"},
      {src: "images/gallery/Figura26.png", alt: "Imagem 26"},
    ],
        [
      {src: "images/gallery/Figura27.png", alt: "Imagem 27"},      
      {src: "images/gallery/Figura28.png", alt: "Imagem 28"},
      {src: "images/gallery/Figura29.png", alt: "Imagem 29"},
    ],
        [
      {src: "images/gallery/Figura30.png", alt: "Imagem 30"},      
      //{src: "images/gallery/Figura31.png", alt: "Imagem 31"},
      {src: "images/gallery/Figura32.png", alt: "Imagem 32"},
    ],
        [
      {src: "images/gallery/Figura34.png", alt: "Imagem 33"},      
      {src: "images/gallery/Figura34.png", alt: "Imagem 34"},
      {src: "images/gallery/Figura35.png", alt: "Imagem 35"},
    ],
    [
      {src: "images/gallery/Figura36.png", alt: "Imagem 36"},      
      {src: "images/gallery/Figura37.png", alt: "Imagem 37"},
      {src: "images/gallery/Figura38.png", alt: "Imagem 38"},
    ],
    [
      {src: "images/gallery/Figura39.png", alt: "Imagem 39"},      
      {src: "images/gallery/Figura40.png", alt: "Imagem 40"},
      {src: "images/gallery/Figura41.png", alt: "Imagem 41"},
    ],
    [
      {src: "images/gallery/Figura42.png", alt: "Imagem 42"},      
      {src: "images/gallery/Figura43.png", alt: "Imagem 43"},
      {src: "images/gallery/Figura44.png", alt: "Imagem 44"},
    ],
        [
      {src: "images/gallery/Figura45.png", alt: "Imagem 45"},      
      {src: "images/gallery/Figura46.png", alt: "Imagem 46"},
      {src: "images/gallery/Figura47.png", alt: "Imagem 47"},
    ],
    [
      {src: "images/gallery/Figura48.png", alt: "Imagem 48"},      
      {src: "images/gallery/Figura49.png", alt: "Imagem 49"},
      {src: "images/gallery/Figura50.png", alt: "Imagem 50"},
    ],
    [
      {src: "images/gallery/Figura51.png", alt: "Imagem 51"},      
      {src: "images/gallery/Figura52.png", alt: "Imagem 52"},
      {src: "images/gallery/Figura53.png", alt: "Imagem 53"},
    ],
    [
      {src: "images/gallery/Figura54.png", alt: "Imagem 54"},      
      {src: "images/gallery/Figura55.png", alt: "Imagem 55"},
      {src: "images/gallery/Figura56.png", alt: "Imagem 56"},
    ],
    [
      {src: "images/gallery/Figura57.png", alt: "Imagem 57"},      
      {src: "images/gallery/Figura58.png", alt: "Imagem 58"},
      {src: "images/gallery/Figura59.png", alt: "Imagem 59"},
    ],
        [
      {src: "images/gallery/Figura57.png", alt: "Imagem 57"},      
      {src: "images/gallery/Figura58.png", alt: "Imagem 58"},
      {src: "images/gallery/Figura59.png", alt: "Imagem 59"},
    ],
    [
      {src: "images/gallery/Figura60.png", alt: "Imagem 60"},      
      {src: "images/gallery/Figura61.png", alt: "Imagem 61"},
      {src: "images/gallery/Figura62.png", alt: "Imagem 62"},
    ],
    [
      {src: "images/gallery/Figura63.png", alt: "Imagem 63"},      
      {src: "images/gallery/Figura64.png", alt: "Imagem 64"},
      {src: "images/gallery/Figura65.png", alt: "Imagem 65"},
    ],
    [
      {src: "images/gallery/Figura66.png", alt: "Imagem 66"},      
      {src: "images/gallery/Figura67.png", alt: "Imagem 67"},
      {src: "images/gallery/Figura68.png", alt: "Imagem 68"},
    ],
    [
      {src: "images/gallery/Figura69.png", alt: "Imagem 69"},      
      {src: "images/gallery/Figura70.png", alt: "Imagem 70"},
      {src: "images/gallery/Figura71.png", alt: "Imagem 71"},
    ],
    [
      {src: "images/gallery/Figura72.jpg", alt: "Imagem 72"},      
      {src: "images/gallery/Figura73.jpg", alt: "Imagem 73"},
      {src: "images/gallery/Figura74.jpg", alt: "Imagem 74"},
    ],
    [
      {src: "images/gallery/Figura75.jpg", alt: "Imagem 75"},      
      {src: "images/gallery/Figura76.jpg", alt: "Imagem 76"},
      {src: "images/gallery/Figura77.jpg", alt: "Imagem 77"},
    ],
    [
      {src: "images/gallery/Figura78.jpg", alt: "Imagem 78"},      
      {src: "images/gallery/Figura79.jpg", alt: "Imagem 79"},
      {src: "images/gallery/Figura80.jpg", alt: "Imagem 80"},
    ],
    [
      {src: "images/gallery/Figura81.jpg", alt: "Imagem 81"},      
      {src: "images/gallery/Figura82.jpg", alt: "Imagem 82"},
      {src: "images/gallery/Figura83.jpg", alt: "Imagem 83"},
    ],
    [
      {src: "images/gallery/Figura84.jpg", alt: "Imagem 84"},      
      {src: "images/gallery/Figura85.jpg", alt: "Imagem 85"},
      {src: "images/gallery/Figura86.jpg", alt: "Imagem 86"},
    ],
    [
      {src: "images/gallery/Figura87.jpg", alt: "Imagem 87"},      
      {src: "images/gallery/Figura88.jpg", alt: "Imagem 88"},
      {src: "images/gallery/Figura89.jpg", alt: "Imagem 89"},
    ],
    [
      {src:"", alt:""},
      {src: "images/gallery/Figura90.png", alt: "Imagem 90"},
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