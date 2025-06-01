import style from "./ImageDescription.module.css"

type ImageDescriptionProps = {
    pictureURL: string,
    width: string,
    description: string
}

function ImageDescription({pictureURL, width, description}: ImageDescriptionProps){
    return (
        <div className={style.imageDescription} style={{ "--image-width": width } as React.CSSProperties}>            
            <img className={style.image} src={pictureURL}/>
            <p className={style.description}>{description}</p>
        </div>
    )
}

export default ImageDescription;