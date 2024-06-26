import {Routes, Route } from "react-router-dom";

import React from 'react';

import Home from "../../pages/home"
import Videos from "../../pages/videos";
import SingleVideo from "../../pages/singleVideo";
import PostVideo from "../../pages/postVideo";

function ApplicationRoutes() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path="/videos" element={<Videos/>}/>
      <Route path="/videos/:id" element={<SingleVideo/>}/>
      <Route path="/postVideo" element={<PostVideo/>}/>
    </Routes>
  )
}

export default ApplicationRoutes;
