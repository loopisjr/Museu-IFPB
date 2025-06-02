import type React from 'react'
import style from './Timeline.module.css'

export default function Timeline({ items }: { items: { element: React.ReactElement, date: string }[] }) {
  return (
    <div className={style.wrapper}>
      <div className={style.bar}></div>
      {items.map((item, index) => {
        return <>
          {index % 2 === 0 ? <div className={style.leftSideItem}>{item.element}</div> : null}
          <span className={style.year}>{item.date}</span>
          {index % 2 === 1 ? <div className={style.rightSideItem}>{item.element}</div> : null}
          {index === 0 ? <div className={style.halfBox}></div> : null}
        </>
      })}
    </div>
  )
}
