import style from "./BannerCajazeiras.module.css"

type BannerCajazeirasProps = {
    title: string,
    subtitle: string,
    description: string,
    author?: string,
    pictureURL: string,
    pictureWidth?: string,    
    vertical_padding?: string,
    horizontal_padding?: string,
    altText?: string,
    className?: string
}


function BannerCajazeiras({
    title, 
    subtitle, 
    description,
    author, 
    pictureURL, 
    pictureWidth="500px",  
    altText,
    className}: BannerCajazeirasProps){


    return (
        <section className={className}>
            <div className={style.banner}>

                <div className={style.textBlock}>
                    <div className={style.content}>
                        <h1 className={style.title}>{title}</h1>
                        <p className={style.subtitle}>{subtitle}</p>
                        <p>{description}</p>
                        <p className={style.author}>Autor(a): {author}</p>
                    </div>
                </div>
                
                <img src={pictureURL} className={style.picture} alt={altText}
                    style={{ width: pictureWidth }}/>
            </div>
        </section>
    );
}

export default BannerCajazeiras;