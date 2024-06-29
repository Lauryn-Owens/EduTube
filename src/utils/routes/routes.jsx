import {Routes, Route } from "react-router-dom";

import React from 'react';

import Home from "../../pages/home"
import Videos from "../../pages/videos/videos";
import SingleVideo from "../../pages/singleVideo/singleVideo";
import PostVideo from "../../pages/postVideo/postVideo";
import Error from "../../pages/error";

function ApplicationRoutes() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path="/videos" element={<Videos/>}/>
      <Route path="/videos/:id" element={<SingleVideo/>}/>
      <Route path="/postVideo" element={<PostVideo/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  )
}

export default ApplicationRoutes;
