import React from "react";
import { firebaseApp } from '../../api/apiFirebase/apiConfig';
import { getAuth, signOut } from "firebase/auth";
import "./Userlogout.css";

const auth = getAuth(firebaseApp);

const Userlogout = () => {
  return (
    <div className="dropdown dropbottom userIcon">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="white"
          className="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
        </svg>
      </button>

      <ul
        className="dropdown-menu dropdown-menu-dark bg-dark"
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <a className="dropdown-item" onClick={ () => signOut(auth) }>
            Cerrar Sesión
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Userlogout;
