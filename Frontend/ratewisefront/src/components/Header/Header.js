
import React from "react";
import logo from "../../ratewiselogo.png";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <div className="header">
            <div className="headerLeft">
                {/* <Link to="/"><img className="header__icon" src={logo} alt="RLogo"/></Link> */}
                <Link to="/contents/popular" style={{textDecoration: "none"}}><span> Popular </span></Link>
                <Link to="/contents/top_rated" style={{textDecoration: "none"}}><span> Top Rated </span></Link>
                <Link to="/contents/upcoming" style={{textDecoration: "none"}}><span> Upcoming </span></Link>
                <Link to="/contents/movie" style={{textDecoration: "none"}}><span> Movie </span></Link>
                <Link to="/contents/song" style={{textDecoration: "none"}}><span> Songs </span></Link>
                <Link to="/contents/anime" style={{textDecoration: "none"}}><span> Anime </span></Link>
                <Link to="/contents/webseries" style={{textDecoration: "none"}}><span> Webseries </span></Link>
                <Link to="/contents/documentary" style={{textDecoration: "none"}}><span> Documentary </span></Link>
            </div>
        </div>
    )
}

export default Header;