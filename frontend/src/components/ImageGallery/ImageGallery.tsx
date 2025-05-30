import styles from "./ImageGallery.module.css";

type ImageData = {
  src: string;
  alt: string;
};

type ImageGalleryProps = {
  images: ImageData[][];
};

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gallery}>
        {images.map((column, columnIndex) => (
          <div key={columnIndex} className={styles.column} data-col={columnIndex}>
            {column.map((image, i) => (
              <div key={i} className={styles.imageWrapper}>
                <img src={image.src} alt={image.alt} className={styles.image} />
                <span className={styles.caption}>{image.alt}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
