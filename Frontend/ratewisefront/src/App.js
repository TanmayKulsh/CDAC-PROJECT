 
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Movie from './pages/ContentDetail/Content';
import NavBar from './components/Navbar/Navbar';
import UserLogin from './components/login/UserLogin';
import AdminLogin from './components/login/AdminLogin';
import ContentList from './components/ContentList/ContentList';
import UserSignUp from './components/login/UserSignUp';
import UserProfile from './components/profile/UserProfile';
import UpdateUser from './components/update/UpdateUser';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AdminFunctions from './components/admin/AdminFunctions';
import AddArtist from './components/artist/AddArtist';
import AdminProfile from './components/profile/AdminProfile';

function App() {
  return (
    <div className='App'>
    <div>
      <Router>
        <NavBar />
        <br></br>
           <br></br>
           <br></br>
           <br></br>
        <Header></Header>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='content/:id' element={<Movie />}></Route>   
          <Route path='contents/:type' element={<ContentList />}></Route>
          <Route path='/userlogin' element={<UserLogin></UserLogin>}></Route> 
          <Route path='/adminlogin' element={<AdminLogin />}></Route> 
          <Route path='/search/:key' element={<ContentList />} /> 
          <Route path='/usersignup' element={<UserSignUp />}></Route>
          <Route path='/profile' element={<UserProfile />}></Route>
          <Route path='/updateUser' element={<UpdateUser />}></Route>
          <Route path='/aboutus' element={<AboutUs />}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/adminfun' element={<AdminFunctions />}></Route>
          <Route path='/addartist' element={<AddArtist />}></Route>
          
          <Route path='/adminprofile' element={<AdminProfile />}></Route>
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
        </Routes> 
      </Router>
    </div>
    </div>
  );
}

export default App;
