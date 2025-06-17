import style from "./ImageDescription.module.css"

type ImageDescriptionProps = {
    pictureURL: string,
    width: string,
    description: string,
    source?: string
}

function ImageDescription({pictureURL, width, description, source}: ImageDescriptionProps){
    return (
        <div className={style.imageDescription} style={{ "--image-width": width } as React.CSSProperties}>            
            <p className={style.description}>{description}</p>
            <img className={style.image} src={pictureURL}/>
            <p className={style.source}>{source}</p>
        </div>
    )
}

export default ImageDescription;