import React, {useEffect, useState} from "react"
import "./ContentList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"
import axios from "axios"

const ContentList = () => {
    
    const [contentList, setContentList] = useState([])
    const {type} = useParams()
    const { key } = useParams()
  
    // console.log(type)
    // console.log(key)
    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    useEffect(() => {
        getData()
    }, [key])

    const getData = () => {
        if(type === "song" || type === "movie" || type === "anime" || type === "documentary" || type === "webseries" ){
        axios(`http://localhost:8080/content/searchByType/${type? type : "movie"}`)
        .then(res=>{
            console.log(res.data);
            setContentList(res.data)
        } )
        .catch(error => console.log(error));
    }
    else if(type === "popular"){
        axios(`http://localhost:8080/content/ratingInRange/3/5`)
        .then(res=>{
            console.log(res.data);
            setContentList(res.data)
        } )
        .catch(error => console.log(error));
    }
    else if(type === "top_rated"){
        axios(`http://localhost:8080/content/ratingInRange/4/5`)
        .then(res=>{
            console.log(res.data);
            setContentList(res.data)
        } )
        .catch(error => console.log(error));
    }
    else if( key != undefined){
        axios(`http://localhost:8080/content/searchContent/${key}`)
        .then(res=>{
            console.log(res.data);
            setContentList(res.data)
        } )
        .catch(error => console.log(error));
    }
    else{
        axios(`http://localhost:8080/content`)
        .then(res=>{
            console.log(res.data);
            setContentList(res.data)
        } )
        .catch(error => console.log(error));
    }
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    contentList.map(content => (
                        <Cards content={content} />
                    ))
                }
            </div>
        </div>
    )
}

export default ContentList