import React, { useState } from 'react';
import "./UpdateUser.css";
// import { useNavigate } from 'react-router-dom';
import logo from "../../images/Screenshot_2023-03-08_152245-removebg-preview.png";

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const UpdateAdmin = () => {
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


    const signin = (event) => {
        event.preventDefault();

        if(password === repassword){
            const dto = {
                // id = 
                firstNAme: {firstNAme},
                lastName: {lastName},
                dob: {dob},
                gender: {selectedGender},
                email: {email},
                password: {password},
                premium: false,
                isActive: true 
            }

            console.log(dto)
            sessionStorage.setItem("user",JSON.stringify(dto));
            localStorage.setItem("user",JSON.stringify(dto));
            
        // Service.authenticateuser(dto)
        //     .then((Response) => {
        //         console.log(Response.data)
        //         var admin = Response.json();
        //     }).catch();

        }
        else{
            alert("Password doesn't match with Re-Entered password");
        }
        window.location.reload();
    }

    return (
        <MDBContainer className="my-5 gradient-form">

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

                        <p>Please Enter The Updated Details (User)</p>

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
                            <MDBBtn className="mb-4 w-100 gradient-custom-2" type='button' onClick={signin}>Update</MDBBtn>
                            {/* <a className="text-muted" href="#!">Forgot password?</a> */}
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

        </MDBContainer>
    );
}

export default UpdateAdmin;