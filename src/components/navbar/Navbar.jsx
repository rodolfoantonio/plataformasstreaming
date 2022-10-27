import React from "react";
import "./Navbar.css";
import Buscar from "../buscar/Buscar";
import Userlogout from "../userlogout/Userlogout";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
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
              <a className="nav-link" href="#">
                Catálogo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mis películas
              </a>
            </li>
            <li className="nav-item">
              <Buscar />
            </li>
          </ul>

          <Userlogout/>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
