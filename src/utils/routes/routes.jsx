import {Routes, Route } from "react-router-dom";

import React from 'react';

import Home from "../../pages/home"
import Login from "../../pages/login";

function ApplicationRoutes() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact  path='/login' element={<Login/>}  />
    </Routes>
  )
}

export default ApplicationRoutes;