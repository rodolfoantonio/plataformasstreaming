/* toma el objeto movie que viene de la API con los parámetros que 
se muestran a continuación y devuleve un objeto JSON normalizado
para ser guardado posteriormente en {results:[]} */
export const movieAJson= (movie)=>{
    const movieJson = {
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title,
        realease_date: movie.release_date,
        original_language: movie.original_language,
        vote_average: movie.vote_average,
        overview: movie.overview,
      };
      
      return movieJson;
}

/* recibe un objeto de tipo {results:[{propsmovie1, propsmovie2....}]} */
export const eliminarPorID = (id, listaPeliculas)=>{
  const listaPeliculas = listaPeliculas.results;

  const peliculasRestantes = listaPeliculas.filter(movie=>movie.id!=id); 
  
}