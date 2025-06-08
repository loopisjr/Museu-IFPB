import style from './timelineCard.module.css';

export default function DirectorsCard({ title, pictureURL, pictureAlt, content }: { title: string, pictureURL?: string, pictureAlt?: string, content: string | string[] }) {
  return <section className={style.card}>
    <caption>
      <figcaption className={style.title}>{title}</figcaption>
      {pictureURL ? <div className={style.imageContainer}>
        <img className={style.image} src={pictureURL} alt={pictureAlt}/>
      </div> : null}
    </caption>
    <p className={style.description}>{typeof (content) === 'string' ? content : content.map((item) => <span>{item}</span>)}</p>
  </section>;
}
