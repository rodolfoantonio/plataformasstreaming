import { eliminarPorID } from "./utils";

/* devuelve un objeto JSON de la forma {results:[{propsmovie1, propsmovie2....}]}
el objeto está guardado en el localstorage en el item "alquiladas" */
export const getAlquiladas = () => {
  const alquiladasString = window.localStorage.getItem("alquiladas");

  if (alquiladasString == null) {
    console.log("alquiladas string " + alquiladasString);
    return { results: [] };
  }

  const alquiladas = JSON.parse(alquiladasString);
  return alquiladas;
};

/* agrega un  elemento json con las propiedades de la pelicula alquilada 
al item "alquiladas" del localstorage. Recibe como parámetro de entrada dicho objeto 
que es creado con ayuda de la funcion utils movieAJSON que puede ser llamada en otros 
componentes */
export const setAlquilada = (propiedadesAlquilada) => {
  const movie = {
    id: propiedadesAlquilada.id,
    poster_path: propiedadesAlquilada.poster_path,
    title: propiedadesAlquilada.title,
    release_date: propiedadesAlquilada.release_date,
    original_language: propiedadesAlquilada.original_language,
    vote_average: propiedadesAlquilada.vote_average,
    overview: propiedadesAlquilada.overview,
  };

  console.log(movie);
  const alquiladas = getAlquiladas();
  alquiladas.results.push(movie);

  console.log(JSON.stringify(alquiladas.results));

  window.localStorage.setItem("alquiladas", JSON.stringify(alquiladas));
};

export const eliminarAlquilada = (propiedadesAlquilada) => {
  const alquiladas = getAlquiladas();
  const id = propiedadesAlquilada.id;
  const peliculasRestantes = eliminarPorID(id, alquiladas);
  window.localStorage.setItem("alquiladas", JSON.stringify(peliculasRestantes));
};

const apiConfig = {
  apiUrl: "https://api.themoviedb.org/3",
  apiKey: "04d1bacfe90a25350330665d5f18d1fa",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
  imageW500: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  URL_IMAGE: "https://image.tmdb.org/t/p/original",
};

export default apiConfig;
