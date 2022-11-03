import { isRejected } from "@reduxjs/toolkit";

export const URL_IMAGE = "https://image.tmdb.org/t/p/original";

export const getAlquiladas = () => {
  const alquiladasString = window.localStorage.getItem("alquiladas");

  if (alquiladasString == null) {
    console.log("alquiladas string " + alquiladasString);
    return { results: [] };
  }

  const alquiladas = JSON.parse(alquiladasString);
  return alquiladas;
};

export const setAlquilada = (propiedadesAlquilada) => {
  const movie = {
    id: propiedadesAlquilada.id,
    poster_path: propiedadesAlquilada.poster_path,
    title: propiedadesAlquilada.title,
    realease_date: propiedadesAlquilada.release_date,
    original_language: propiedadesAlquilada.original_language,
    vote_average: propiedadesAlquilada.vote_average,
    overview: propiedadesAlquilada.overview,
  };

  console.log(movie);
  const alquiladas = getAlquiladas();
  alquiladas.results.push(movie);

  console.log(JSON.stringify(alquiladas.results));

  window.localStorage.setItem(
    "alquiladas",
    JSON.stringify(alquiladas)
  );
};
