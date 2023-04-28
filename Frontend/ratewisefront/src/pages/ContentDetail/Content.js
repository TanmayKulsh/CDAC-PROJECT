import React, {useEffect, useState} from "react"
import "./Content.css"
import { useParams } from "react-router-dom"
import axios from "axios"
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';
import Review from "../../components/Review/Review"
const Movie = () => {
    var loggedinperson;
    const [currentMovieDetail, setMovie] = useState()
    const [reviewArray, setReviewArray] = useState([])
    const { id } = useParams()
    const [currentUser, setCurrentUSer] = useState(undefined);

    const [title, settitle] = useState();
    const [review, setReview] = useState();
    const [rating, setRating] = useState();


    useEffect(() => {
        loggedinperson = JSON.parse(localStorage.getItem("user"));
        if (loggedinperson) {
            setCurrentUSer(loggedinperson);
            // console.log(localStorage.getItem("user").firstNAme)
        }
    }, [])


    useEffect(() => {
        if(currentMovieDetail){
            setReviewArray(currentMovieDetail.reviews)
            console.log(reviewArray)
        }
    })

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, []);

    var getData = () => {
        axios(`http://localhost:8080/content/${id}`)
        .then(res=>{
            console.log(res.data);
            setMovie(res.data)
            //setReviewArray(res.data.reviews)
            // setReviewArray(res.data.reviews)
            // const arr = (currentMovieDetail.reviews).map((review) => {
            //     return review;
            // })
            // console.log(arr);
            // setReviewArray(arr);
            // window.location.reload();;
        } )
        .catch(error => console.log(error));
    };


    const subReview =()=>{
        
        const dto = {title:`${title}`,
        review:`${review}`,
        rating:`${rating}`        
        }
        axios.post(`http://localhost:8080/user/${currentUser.id}/${id}/addreview`,dto)
        .then(res=>{
            console.log(res.data);
            window.location.reload();
        } )
        .catch(error => console.log(error));
    };

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`http://localhost:8080/content/${id}/image`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`http://localhost:8080/content/${id}/image`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.name : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.avgRating: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.voteCount + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.length + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.releaseDate : ""}</div>
                        <div className="movie__genres">{currentMovieDetail ? "Genre : " + currentMovieDetail.genre : ""}</div>
                        {/* <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div> */}
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.description : ""}</div>
                    </div>
                    
                </div>
            </div>
            {/* <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div> */}
            {/* <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div> */}

            <div>
                {/* {
                  reviewArray?.map(review => (
                    <Review review={review}/>
                  ))  
                } */}
                    <table>
                        <thead><tr><th>Title</th><th>Review</th><th>Rating</th></tr></thead>
                        <tbody>
                    {reviewArray?.map(item => (
                        <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.review}</td>
                        <td>{item.rating}</td>
                      </tr>
                    ))}
                    </tbody>
                    </table>
            </div>
            <div>
                {
                    currentUser
                    ?(
                        
                        <form>
                            <br></br>
                            <br/>
                            <br/>
                            <h3>Enter Review</h3>
                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column ms-5">

                        <MDBInput wrapperClass='mb-4' label='Enter Title' id='form1' type='text' placeholder='Enter Title'  value={title} onChange={e => settitle(e.target.value)}/>
                        <MDBInput wrapperClass='mb-4' label='Enter Review' id='form2' type='text' placeholder='Enter Review'  value={review} onChange={e => setReview(e.target.value)}/>
                        <MDBInput wrapperClass='mb-4' label='Enter Rating' id='form2' type='number' placeholder='Enter Rating Up to 5'   value={rating} onChange={e => setRating(e.target.value)}/>

                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn className="mb-4 w-100 gradient-custom-2" type='button' onClick={subReview} >Submit Review</MDBBtn>
                        </div>
                        </div>

                </MDBCol>
                    </form>
                    ):
                    ("")
                }
            </div>
        </div>
    )
}

export default Movie