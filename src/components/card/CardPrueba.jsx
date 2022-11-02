import React from "react";

const CardPrueba = ({ movie }) => {
  return (
    <div className="col-sm-4" key={movie.id + "_id"}>
      <div className="card text-white bg-dark m-1">
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPrueba;
