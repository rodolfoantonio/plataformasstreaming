import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMisPeliculas } from "../../redux/alquiladasSlice";

const Alquilar = ({ movie }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const misPeliculas = useSelector((state) => state.alquiladas.value);

  return (
    <button 
      className="btn-danger position-absolute end-0 top-0 m-4"
      onClick={() => dispatch( addMisPeliculas({ user, movie, misPeliculas }) )}
    >
      Alquilar
    </button>
  );
};

export default Alquilar;
