import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Home from './pages/user/home';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import "jquery"
import "popper.js"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route  path="/register" element={<Register/>} />
        <Route  path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;