import React from "react";

const AdminFunction = () => {




    return (
        <div style={{textAlign:"center", border:"5px solid #FF2300"}}>
<br></br>
<h1 style={{color:"blue"}}>Admin Functionality</h1>
<br></br>
<br></br>
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
    
<br></br>
<br></br>
<br></br>
         </div>
    )
}   
export default AdminFunction;