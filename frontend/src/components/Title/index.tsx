import style from "./Title.module.css"

type TitleProps = {
    content: string;
    greenBarWidth?: string;
};

function Title({content, greenBarWidth}: TitleProps){
    return(
        <div className={style.titleBlock}>
            <h1 className={style.titleContent}> {content} </h1>
            <div className={style.greenBar} style={{width: greenBarWidth ? greenBarWidth : "60px"}}></div>            
        </div>
    )
}

export default Title;