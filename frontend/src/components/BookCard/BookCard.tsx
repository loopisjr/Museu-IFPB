import style from "./BookCard.module.css";

type BookCardProps = {
  image: string;
  tags: string[];
  title: string;
  author: string;
  description: string;
  inverted?: boolean;
  link?: string;
};

export function BookCard({ image, tags, title,  author, description, inverted = false, link}: BookCardProps) {
  return (
    <div className={`${style.container} ${inverted ? style.inverted : ""}`}>
      <div className={style.imageWrapper}>
        <img src={image} alt={title} className={style.image} />
      </div>

      <div className={style.textContent}>
        <div className={style.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={style.tag}>
              {tag}
              {index < tags.length - 1 && ", "}
            </span>
          ))}
        </div>

        <h1 className={style.title}>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={style.linkTitle}
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h1>

        <img src={image} alt={title} className={style.imageMobile} />

        <p className={style.author}>Autor(a): {author}</p>
        <p className={style.description}>{description}</p>
      </div>
    </div>
  );
}
