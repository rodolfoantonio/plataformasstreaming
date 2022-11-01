import React from "react";
import "./Buscar.css";

import { useSelector, useDispatch } from "react-redux";
import { fetchBySearch } from "../../redux/moviesSlice";
import { useState } from "react";

const Buscar = () => {
  const movies = useSelector((state) => state.movies.value);
  const dispatch = useDispatch();

  const [terminoBusqueda, setTerminoBusqueda ]= useState("");

  return (
    <input
      type="text"
      name=""
      placeholder="Buscar"
      id=""
      onChange={(e) => {
        setTerminoBusqueda(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          dispatch(fetchBySearch(terminoBusqueda));
        }
      }}
    />
  );
};

export default Buscar;
