import React from "react";

import apiConfig from '../../api/apiConfig'
import Alquilar from "../alquilar/Alquilar";
import { movieAJson } from "../../api/utils";

const CardMovie = ({ movie }) => {
  return (
    <div key={movie.id} className="col-sm-8 col-md-6 col-lg-4 d-flex justify-content-center mb-5 position-relative">
      <div className="border">
      <img
        src={`${apiConfig.URL_IMAGE + movie.poster_path}`}
        alt=""
        height={400}
        width="80%"
        style={{display: 'block', margin: '0 auto'}}
      />
      <Alquilar key={movie.id+"_alquilar"} movie={movieAJson(movie)}/>
      <div className="px-3 pt-2">
        <h2 className="pt-3">{`${movie.title} (${movie.release_date})`}</h2>
        <h5>Idioma: {movie.original_language}</h5>
        <h5>Calificación: {`${movie.vote_average} / 10`}</h5>
        <p className="text-justify" style={{ fontSize: 14 }}>
          {" "}
          <b style={{ fontSize: 18 }}>Descripción:</b> {movie.overview}
        </p>
      </div>
      </div>
    </div>
  );
};

export default CardMovie;
