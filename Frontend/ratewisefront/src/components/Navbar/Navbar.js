import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../ratewiseLogo1.png";

//import "./NavBar.css";


const NavBar = () => {
    var loggedinperson;
    var loggedinpersontype;
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const [currentUser, setCurrentUSer] = useState(undefined);
    const [currentUserType, setCurrentUSerType] = useState(undefined);


    useEffect(() => {
        loggedinperson = JSON.parse(localStorage.getItem("user"));
        if (loggedinperson) {
            setCurrentUSer(loggedinperson);
            // console.log(localStorage.getItem("user").firstNAme)
        }
    }, [])

    
    // useEffect(() => {
    //     loggedinpersontype = JSON.parse(localStorage.getItem("type"));
    //     if (loggedinpersontype) {
    //         setCurrentUSerType(loggedinpersontype);
    //         console.log(currentUserType)
    //     }
    // }, [])

    const profile = () => {
        if(localStorage.getItem("type") == "admin"){
            navigate("/adminprofile")
        }
        else {
            navigate("/profile")
            
        }
        }

    const Ulogin = () =>{
      navigate("/userlogin")
    }
    
    const Alogin = () =>{
      navigate("/adminlogin")
    }

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("type");
       
        navigate("/");
        window.location.reload();
    }

    const searching = (event) => {
        event.preventDefault();
        const searchElement =  `${search}`;
          if(searchElement.length === 0){    
              navigate("/")
          }else{ 
            navigate(`/search/${searchElement}`);
          }
      }






    return (
        <div style={{ position: "fixed", zIndex: "1001", width: "100%" }}>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "black", color: "white" }}>
                <a className="navbar-brand" href="/"><img style={{ width: "100px" }} src={logo}></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/aboutus">About Us <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contactus">Contact Us</a>
                        </li>
                        
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={e => setSearch(e.target.value)} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={searching}>Search</button>
                    </form>
                    &nbsp;&nbsp;
                    &nbsp;

                    {
                        currentUser
                            ? (
                                <div>
                                    <button class="btn btn-secondary" type="button" onClick={profile}>
                                    Hii! {
                                            currentUser.firstNAme
                                        }
                                    </button>
                                    &nbsp;
                                    &nbsp;
                                    <button class="btn btn-secondary person" type="button" onClick={logout}>
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div class="dropdown">
                                    <div>
                                        <button class="btn btn-secondary" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="true" onClick={Ulogin} style={{ textDecoration: "none", color:"white"}}> 
                                            User Login
                                        </button>
                                        &nbsp;
                                        &nbsp;
                                        <button class="btn btn-secondary" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="true" onClick={Alogin} style={{ textDecoration: "none", color:"white"}} >
                                            Admin Login
                                        </button>
                                    </div>

                                </div>
                            )}
                </div>
            </nav>
        </div>
    );

}


export default NavBar;