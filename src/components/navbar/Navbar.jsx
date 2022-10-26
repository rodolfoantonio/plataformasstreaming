import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Catálogo
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Mis películas
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <input type="text" name="" placeholder="Buscar" id="" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
