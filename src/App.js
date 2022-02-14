import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import News from "./components/News/News";
// import Photos from "./components/Photos/Photos";
import Setting from "./components/Settings/Setting";
import Friends from "./components/Friends/Friends";
import Footer from "./components/Footer/Footer";

import UsersContainer from "./components/Users/UsersContainer";
import ContentContainer from "./components/Content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
const News = React.lazy(()=> import("./components/News/News"));
const Photos = React.lazy(()=> import("./components/Photos/Photos"));



function App  (props)  {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="main">
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
          <Route exact path='/' element={<ContentContainer/>} />
          <Route path='/profile/:userId' element={<ContentContainer/>} />
          <Route path='/profile/*' element={<ContentContainer/>} />
          <Route path='/dialogs' element={<DialogsContainer/>}/>
          <Route path='/news' element={<Suspense fallback={<div>Loading...</div>}> <News/></Suspense>} />
          <Route path='/photos' element={ <Suspense fallback={<div>Loading...</div>}>< Photos/> </Suspense>} />
          <Route path='/users' element={< UsersContainer />} />
          {/* <Route path='/login' element={< Login />} /> */}
          </Routes>
        </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
