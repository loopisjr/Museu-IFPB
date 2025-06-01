import style from "./Title.module.css"

type TitleProps = {
    content: string;
};

function Title({content}: TitleProps){
    return(
        <div className={style.titleBlock}>
            <h1 className={style.titleContent}> {content} </h1>
            <div className={style.greenBar}></div>            
        </div>
    )
}

export default Title;