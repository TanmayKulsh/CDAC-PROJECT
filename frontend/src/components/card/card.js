import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({content}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/content/${content.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`http://localhost:8080/content/${content.id}/image`} alt="Content" />
                <div className="cards__overlay">
                    <div className="card__title">{content?content.name:""}</div>
                    <div className="card__runtime">
                        {content?content.releaseDate:""}
                        <span className="card__rating">{content?content.avgRating:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{content ? content.description.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards