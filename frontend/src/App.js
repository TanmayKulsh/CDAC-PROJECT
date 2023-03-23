 
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
        </Routes> 
      </Router>
    </div>
    </div>
  );
}

export default App;
