import React from "react";

const InfoBanner = ({ trailer, movie, HandlerUpdatePlaying }) => {
  return (
    <div className="container">
      <div className="">
        {trailer ? (
          <button
            className="boton"
            onClick={ HandlerUpdatePlaying() }
            type="button"
          >
            Play Trailer
          </button>
        ) : (
          "Sorry, no trailer available"
        )}
        <h1 className="text-black">{movie.title}</h1>
        <p className="text-black">{movie.overview}</p>
      </div>
    </div>
  );
};

export default InfoBanner;
