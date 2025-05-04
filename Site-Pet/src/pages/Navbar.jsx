import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="d-inline-block align-text-top" src="/logo-sem-fundo.png" alt="Logo" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{ display: "flex", width: "100%" }}>
            <li className="nav-item">
              <Link className="nav-link" to="/landingpage">Página Inicial</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cuidador">Cuidadores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre">Sobre</Link>
            </li>
            <li className="nav-item ms-lg-auto" id="cadastro">
              <Link className="nav-link" to="/cadastro">Cadastrar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
