import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    
    const editProfile = ()=>{
      navigate("/updateUser")

    }
    const logout = () => {
        localStorage.removeItem("user");
        sessionStorage.removeItem("user");

        window.location.reload();
    }



  return (
    // <h1>hii</h1>
    <>
    <div style={{textAlign:"center", border:"5px solid #FF2300"}}>
        <br></br>
      <h1 style={{color:"blue"}}>Profile Page</h1><br></br>
      <h4>
      <p>First Name: {user.firstNAme}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Date of Birth: {user.dob}</p>
      <p>Gender: {user.gender}</p>
      <p>Email: {user.email}</p>
      <br></br>
      </h4>
      
    
    {/* &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp; */}
    <button class="btn btn-secondary" type="button" onClick={editProfile}>Edit Profile</button>
   <br></br>
   <br></br>
   <br></br>
    </div>
    {/* <button type='button' onclick={logout}>Logout</button> &nbsp;
    <button type='button' onclick={editprofile}>Edit Profile</button>
     */}
    </>
  );
}

export default ProfilePage;
