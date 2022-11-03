import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { alquilar } from "../../redux/alquiladasSlice";

const Devolver = (props) => {
  const dispatch = useDispatch();
  const alquiladas = useSelector((state) => state.alquiladas.value);

  return (
    <button 
      className="btn-danger position-absolute end-0 top-0 m-4"
      onClick={()=>dispatch(alquilar(props.movie))}
    >
      Devolver
    </button>
  );
};

export default Alquilar;
