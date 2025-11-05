import style from "./Title.module.css"

type TitleProps = {
    content: string;
    greenBarWidth?: string;
    margin?: string;
};

function Title({content, greenBarWidth, margin}: TitleProps){
    return(
        <div className={style.titleBlock} style={{margin: margin ? margin: "10px 0 40px"}}>
            <h1 className={style.titleContent}> {content} </h1>
            <div className={style.greenBar} style={{width: greenBarWidth ? greenBarWidth : "60px"}}></div>            
        </div>
    )
}

export default Title;