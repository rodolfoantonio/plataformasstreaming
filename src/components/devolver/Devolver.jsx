import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteOfMisPeliculas } from "../../redux/alquiladasSlice";

const Devolver = ({ movie }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const misPeliculas = useSelector((state) => state.alquiladas.value);

  return (
    <button 
      className="btn-danger position-absolute end-0 top-0 m-4"
      onClick={() => dispatch( deleteOfMisPeliculas({ user, movie, misPeliculas }) )}
    >
      { user.role === 'ADMIN' ? 'Eliminar' : 'Devolver' }
    </button>
  );
};

export default Devolver;
