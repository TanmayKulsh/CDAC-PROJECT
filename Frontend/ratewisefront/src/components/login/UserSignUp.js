import React, { useState } from 'react';
import "./AdminLogin.css";
 import { useNavigate } from 'react-router-dom';
import logo from "../../ratewiseLogo1.png";
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';


const UserSignUp = () => {
    const navigate = useNavigate();

    // firstname lastname gender dob email cnfpassword password // isActive // premium
    const [firstNAme, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [dob, setDob] = useState();
    // const [gender, setGender] = useState();


    const [selectedGender, setSelectedGender] = useState("");

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
        console.log(selectedGender)
    };




    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [repassword, setRePassword] = useState();
    const [premium, setPrremium] = useState(false);
    const [isActive, setIsActive] = useState(true);

    // const navigate = useNavigate();


    const register = (event) => {
        event.preventDefault();

        if(password === repassword){
            const dto = {
                firstNAme: firstNAme,
                lastName: lastName,
                dob: dob,
                gender: selectedGender,
                email: email,
                password: password,
                premium: false,
                isActive: true 
            }

            console.log(dto)
        axios.post("http://localhost:8080/user",dto)  
        .then((response) => {
            console.log(response.data)
            navigate("/userlogin")
        })
        .catch(error => {console.log(error)
            alert("Invalid Email or Password..!!!")
        })
        }
        else{
            alert("Password doesn't match with Re-Entered password");
        }
    }

    return (
        <MDBContainer className="my-5 gradient-form">

            {/* <MDBRow> */}

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

                        <p>Please login to your account (User)</p>

                        <MDBInput wrapperClass='mb-4' label='First Name' id='form4' type='text' placeholder='Enter First Name' value={firstNAme} onChange={e => setFirstName(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Last Name' id='form5' type='text' placeholder='Enter Last Name' value={lastName} onChange={e => setLastName(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Date of Birth' id='form1' type='date' placeholder='Enter DOB' value={dob} onChange={e => setDob(e.target.value)} />
                        <span>Select gender</span>
                        <MDBInput wrapperClass='mb-4' name='radio' label='Male' id='form2' type='radio' value="MALE"  checked={selectedGender === "MALE"} onChange={handleGenderChange } />
                        <MDBInput wrapperClass='mb-4' name='radio' label='Female' id='form2' type='radio' value="FEMALE" checked={selectedGender === "FEMALE"} onChange={handleGenderChange } />
                        <MDBInput wrapperClass='mb-4' name='radio' label='Other' id='form2' type='radio' value="OTHER" checked={selectedGender === "OTHER"} onChange={handleGenderChange } />

                        <MDBInput wrapperClass='mb-4' label='email' id='form3' type='text' placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Password' id='form6' type='password' placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Re-Enter Password' id='form7' type='password' placeholder='Re-Enter Password' value={repassword} onChange={e => setRePassword(e.target.value)} />


                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn className="mb-4 w-100 gradient-custom-2" type='button' onClick={register}>Register</MDBBtn>
                            
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">Already have an account?</p>
                            <MDBBtn outline className='mx-2' color='danger' href='/userlogin'>
                                Sign in
                            </MDBBtn>
                        </div>

                    </div>

                </MDBCol>
            </form>

            {/* <MDBCol col='6' className="mb-5">
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

                </MDBCol> */}

            {/* </MDBRow> */}

        </MDBContainer>
    );
}

export default UserSignUp;