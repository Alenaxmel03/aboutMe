import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Photos from "./components/Photos/Photos";
import Setting from "./components/Settings/Setting";
import Friends from "./components/Friends/Friends";
import Footer from "./components/Footer/Footer";

import UsersContainer from "./components/Users/UsersContainer";
// import ContentContainer from "./components/Content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(()=> import("./components/Dialogs/DialogsContainer"));
const ContentContainer = React.lazy(()=> import("./components/Content/ContentContainer"));


function App  (props)  {

  return ( 
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="main">
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
          <Route path='/profile/:userId' element={<ContentContainer/>} />
          <Route path='/profile/*' element={<Suspense fallback={<div>Loading...</div>}><ContentContainer/></Suspense>} />
          <Route path='/dialogs' element={<Suspense fallback={<div>Loading...</div>}><DialogsContainer/></Suspense>}/>
          <Route path='/news' element={< News />} />
          <Route path='/photos' element={< Photos/>} />
          <Route path='/settings' element={< Setting/>} />
          <Route path='/friends' element={< Friends />} />
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
