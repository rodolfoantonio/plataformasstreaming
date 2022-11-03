import React from 'react';
import axios from 'axios';
import Youtube from 'react-youtube';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '04d1bacfe90a25350330665d5f18d1fa';
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

  // Variables de estado de la aplicación
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({ title: 'Loading Movies' });
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [searchKey, setSearchKey] = useState('');

 

  // Función para buscar pelicula
  const searchMovies = (e) => {
    e.preventDefault();
    setSearchKey(e.target.value);
    fetchMovies(searchKey);
  }

  // Se hace la petición al incio de la aplicación, no hay dependencia
  useEffect( () => {
    fetchMovies();
  }, []) 

  return (
    <>

      {/* Contenedor que mostrara los posters de las peliculas actuales */}
      <div className='container'>

        <h2 className='text-center my-5'>Trailer Movies</h2>

        <div className='row'>
          <div className='col-12 py-5' style={{borderRadius: '10px'}}>
            {/*Buscador de peliculas*/}
            <h4>Buscador de película:</h4>
            <input type='text' placeholder='Buscar' onChange={searchMovies}/>
            {/*Buscador de peliculas*/}
          </div>
        </div>

        <div className='row'>
          {/* Card de cada película */}
          {movies.map( (movie) =>  
            (
            <div key={movie.id} className='col-md-4 mb-2 border'>
                <img src={`${URL_IMAGE + movie.poster_path}`} alt='' height={600} width='100%'/>
                <div className='px-3 pt-2'>
                  <h2 className='pt-3'>{ `${movie.title} (${movie.release_date})` }</h2>
                  <h5>Idioma: {movie.original_language}</h5>
                  <h5>Calificación: {`${movie.vote_average} / 10`}</h5>
                  <p className='text-justify'> <b style={{fontSize: 18}}>Descripción:</b> {movie.overview}</p>
                </div>
            </div>
            )
          )}
          {/* Fin Card de cada película */}
        </div>
      </div>
      {/* Fin Contenedor que mostrara los posters de las peliculas actuales */}

    </>
  );
}

export default App;
