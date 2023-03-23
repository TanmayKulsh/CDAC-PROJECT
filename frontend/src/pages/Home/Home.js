import React, { useEffect, useState } from "react"
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import axios from "axios";
import ContentList from "../../components/ContentList/ContentList";

const Home = () => {

    const [ popularContent, setPopularContent ] = useState([])

    useEffect(() => {
        axios("http://localhost:8080/content")
        .then(res=>{
            console.log(res.data);
            setPopularContent(res.data)
        } )
        
        .catch(error => console.log(error));
    }, [])
    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularContent.map(content => { return (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/content/${content.id}`} >
                                <div className="posterImage">
                                    <img src= {`http://localhost:8080/content/${content.id}/image`} alt="Content"/>
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{content ? content.name: ""}</div>
                                    <div className="posterImage__runtime">
                                        {content ? content.releaseDate : ""}
                                        <span className="posterImage__rating">
                                            {content ? content.avgRating :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{content ? content.description : ""}</div>
                                </div>
                            </Link>
                        ) })
                    }
                </Carousel>
                <ContentList />
            </div>
        </>
    )
}

export default Home