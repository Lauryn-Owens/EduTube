import {Routes, Route } from "react-router-dom";

import React from 'react';

import Home from "../../pages/home"
import Login from "../../pages/login";
import Videos from "../../pages/videos";
import SingleVideo from "../../pages/singleVideo";

function ApplicationRoutes() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact  path='/login' element={<Login/>}  />
      <Route exact path="/videos" element={<Videos/>}/>
      <Route exact path="/singleVideo" element={<SingleVideo/>}/>
    </Routes>
  )
}

export default ApplicationRoutes;