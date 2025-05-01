import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroCuidador from "./pages/CadastroCuidador";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return(
    <div>
      <nav>
        <Navbar/>
      </nav>
      <LandingPage/>
    </div>
  );
}

export default App;