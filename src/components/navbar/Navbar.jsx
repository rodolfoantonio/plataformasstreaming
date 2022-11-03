import React from "react";
import "./Navbar.css";
import Buscar from "../buscar/Buscar";
import Userlogout from "../userlogout/Userlogout";
import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link to="/catalogo" className="nav-link">
                Catálogo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/plataformasstreaming" className="nav-link">
                Mis películas
              </Link>
            </li>
            <li className="nav-item">
              <Buscar />
            </li>
          </ul>
          <Userlogout />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
