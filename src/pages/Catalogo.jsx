import React from 'react'
import { useSelector } from "react-redux";

import Reproductor from '../components/reproductor/Reproductor';
import CardMovie from '../components/cardmovie/CardMovie';

const Home = () => {
  const movies = useSelector((state) => state.movies.value);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center py-5">Catálogo de Peliculas</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Reproductor />
        </div>
      </div>
      <div className='container'>
        <div className="row pt-3 d-flex justify-content-center">
          {movies.map((movie) => ( <CardMovie movie={movie} tipo="alquilar" /> ))}
        </div>
      </div>
    </>
  );
}

export default Home;
