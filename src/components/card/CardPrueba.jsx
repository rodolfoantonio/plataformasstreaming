import React from "react";
import { URL_IMAGE } from "../../api/apiConfig";
import Alquilar from "../alquilar/Alquilar";
import { movieAJson } from "../../api/utils";

const CardPrueba = ({ movie }) => {
  return (
    <div key={movie.id} className="col-md-4 mb-2 border position-relative">
      <img
        src={`${URL_IMAGE + movie.poster_path}`}
        alt=""
        height={400}
        width="100%"
      />
      <Alquilar key={movie.id+"_alquilar"} movie={movieAJson(movie)}/>
      <div className="px-3 pt-2">
        <h2 className="pt-3">{`${movie.title} (${movie.release_date})`}</h2>
        <h5>Idioma: {movie.original_language}</h5>
        <h5>Calificación: {`${movie.vote_average} / 10`}</h5>
        <p className="text-justify">
          {" "}
          <b style={{ fontSize: 18 }}>Descripción:</b> {movie.overview}
        </p>
      </div>
    </div>
  );
};

export default CardPrueba;
