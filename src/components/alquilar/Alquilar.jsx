import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMisPeliculas, addToCatalogo } from "../../redux/alquiladasSlice";

const Alquilar = ({ movie }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const misPeliculas = useSelector((state) => state.alquiladas.value);

  return (
    <button 
      className="btn-success position-absolute end-0 top-0 m-4"
      onClick={() => dispatch( 
        user.role === 'ADMIN' ? addToCatalogo(movie) : addMisPeliculas({ user, movie, misPeliculas }) 
      )}
    >
      { user.role === 'ADMIN' ? 'Agregar al Catálogo' : 'Alquilar' }
    </button>
  );
};

export default Alquilar;
