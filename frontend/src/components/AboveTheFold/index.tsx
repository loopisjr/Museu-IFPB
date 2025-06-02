import style from './AboveTheFold.module.css'

export default function AboveTheFold({ title, pictureURL, children }: { title: string, pictureURL: string, children?: React.ReactElement }) {
  return (
    <div className={style.wrapper}>
      <div className={style.background} aria-hidden>
        <img className={style.backgroundImage} src={pictureURL} aria-hidden/>
      </div>
      <main className={style.container}>
        <div className={style.infoBox}>
          <h1 className={style.title}>{title}</h1>
          <div className={style.content}>
            {children}
          </div>
        </div>
        <div className={style.emptySpace} aria-hidden/>
      </main>
    </div>
  )
}
