import style from "./ImageDescription.module.css"

type ImageDescriptionProps = {
    pictureURL: string,
    width: string,
    description: string,
    source?: string
    numPicture?: number,
}

function ImageDescription({pictureURL, width, description, source, numPicture}: ImageDescriptionProps){
    const pictureNumeration = numPicture ? "Figura " + numPicture: '';
    const tagStrong = numPicture ? <strong className={style.bold}>{pictureNumeration}&nbsp;-&nbsp;</strong> : '';
    const sourceContent = source ? <strong className={style.bold}>Fonte: </strong>: '';

    return (
        <>
        <p className={style.description}> {tagStrong} {description}</p>
        <div className={style.imageDescription} style={{ "--image-width": width } as React.CSSProperties}>
            <img className={style.image} src={pictureURL}/>
            <p className={style.source}>{sourceContent} {source}</p>
        </div>
        </>
    )
}

export default ImageDescription;