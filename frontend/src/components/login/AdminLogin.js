import React, { useState } from 'react';
import "./AdminLogin.css";
// import { useNavigate } from 'react-router-dom';
import logo from "../../ratewiseLogo1.png";

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // const navigate = useNavigate();


    const auth = (event) => {
        event.preventDefault();

        const dto = {
            email: `${email}`,
            password: `${password}`
        }

        // Service.authenticateadmin(dto)
        //     .then((Response) => {
        //         console.log(Response.data)
        //         var admin = Response.json();
        //     }).catch();
    }



    return (
        <MDBContainer className="my-5 gradient-form">

            <MDBRow>
                <form>
                    <MDBCol col='6' className="mb-5">
                        <div className="d-flex flex-column ms-5">

                            <div className="text-center">
                                <img src={logo}
                                    style={{ width: '185px' }} alt="logo" />
                                <br></br>
                                <br></br>
                                <h4 className="mt-1 mb-5 pb-1">Welcome To <b style={{ color: "blue" }}>RATE WISE</b></h4>
                            </div>

                            <p>Please login to your account (Admin)</p>


                            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' placeholder='Enter Your Email' value={email} onChange={e => setEmail(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)} />


                            <div className="text-center pt-1 mb-5 pb-1">
                                <MDBBtn type='button' className="mb-4 w-100 gradient-custom-2" onClick={auth} >Sign in</MDBBtn>
                                <a className="text-muted" href="#!">Forgot password?</a>
                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                                {/* <p className="mb-0">Don't have an account?</p>
                            <MDBBtn outline className='mx-2' color='danger'>
                                Sign Up
                            </MDBBtn> */}
                            </div>

                        </div>

                    </MDBCol>
                </form>


                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 class="mb-4">Decide your next Binge watch with us</h4>
                            <p class="small mb-0">Rate-Wise website is a platform where users can provide their unbiased opinions
                                and evaluations of various types of content, such as  movies, TV shows, music albums,
                                and other forms of media. The main goal of an honest content review website is
                                to provide users with reliable and informative reviews that help them make informed decisions
                                about the content they consume.
                            </p>
                        </div>

                    </div>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default AdminLogin;