import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroCuidador from "./pages/CadastroCuidador";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import LandingPage from "./pages/LandingPage";
import Sobre from "./pages/Sobre";
import Cuidador from "./pages/Cuidador";
import Footer from "./pages/Footer";
import "./App.css";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<CadastroCuidador />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cuidador" element={<Cuidador />} />
      </Routes>
      <Footer /> {}
    </BrowserRouter>
  );
}

export default App;
