import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { alquilar } from "../../redux/alquiladasSlice";

const Alquilar = (props) => {
  const dispatch = useDispatch();
  const alquiladas = useSelector((state) => state.alquiladas.value);

  return (
    <button 
      className="btn-danger position-absolute end-0 top-0 m-4"
      onClick={()=>dispatch(alquilar(props.movie))}
    >
      Alquilar
    </button>
  );
};

export default Alquilar;
