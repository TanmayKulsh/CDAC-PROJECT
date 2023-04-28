import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    
    
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
      <a href="/userupdate" style={{color:"yellow"}}>Edit Profile</a>
   <br></br>
   <br></br>
   <br></br>
    </div>
    <h4>Artist Operations</h4>
    <a href="/addartist" style={{color:"yellow"}}>Add Artist</a><br></br>
    <a href="/deleteartist" style={{color:"yellow"}}>Delete Artist</a>
    <br></br>
    <br></br>
    <h4>Content Operations</h4>
    <a href="/addcontent" style={{color:"yellow"}}>Add Content</a><br></br>
    <a href="/deletecontent" style={{color:"yellow"}}>Delete Content</a>
    <br></br>
    <br></br>
    <h4>User Operations</h4>
    <a href="/deleteuser" style={{color:"yellow"}}>Delete User (deactivate Account)</a><br></br>
    <a href="/upgradeuser" style={{color:"yellow"}}>Upgrade user to premium</a>
    
    </>
  );
}

export default AdminPage;
