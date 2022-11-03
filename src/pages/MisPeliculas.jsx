import React from 'react'
import { useSelector } from "react-redux";

import CardMovie from '../components/card/CardMovie';

const MisPeliculas = () => {
  const movies = useSelector((state) => state.alquiladas.value);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h2 className='text-center py-5'>Mis Películas</h2>
        </div>
      </div>
      <div className='row pt-3 d-flex justify-content-center'>
        { movies.map( (movie) => <CardMovie movie={movie} tipo="devolver"/> ) }
      </div>
    </div>
  )
}

export default MisPeliculas;